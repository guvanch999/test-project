const statusCodes = require('../utils/statusCodes')
const service = require('../services/balanceService')
module.exports = class BalanceController {
    static async updateBalance(request, response) {
        try {
            let {userId, amount} = request.body
            if (!userId || !amount) {
                return response.status(statusCodes.BAD_REQUEST).json({message: "Body data is invalid"})
            }
            const user = await service.getUserById(userId)
            if (!user) {
                return response.status(404).json({message: "No user detected"})
            }

            if (user.balance < parseInt(amount)) {
                return response.status(400).json({message: "Balance of user is lower than amount"})
            }

            const [before, after] = await service.updateBalance(userId, amount)
            return response.status(statusCodes.OK).json({before, after})
        } catch (err) {
            console.log(err)
            return response.status(statusCodes.SERVER_ERROR).json({message: "Cannot update balance. Balance is processing"})
        }
    }
}