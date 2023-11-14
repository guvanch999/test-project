const {sequelize, User} = require('../models/index')
const AppError = require('../utils/appError')
const {RelationshipType} = require("sequelize/lib/errors/database/foreign-key-constraint-error");

module.exports = {
    async updateBalance(userId, amount) {
        const user = await User.findOne({
            where: {
                id: userId
            }
        })
        if (!user) {
            throw new AppError("No user found", 404)
        }
        const [results, metadata] = await sequelize.query(`
            BEGIN;
            select * from "Users" where id = ${userId} for update;
            UPDATE  "Users"
            SET balance = balance - ${amount} where id = ${userId} ;
            select * from "Users" where id = ${userId};
            COMMIT;`);
        return results
    },
    async getUserById(userId) {
        return await User.findOne({
            where: {
                id: userId
            }
        })
    }
}