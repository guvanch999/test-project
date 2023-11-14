const {sequelize} = require('../models/index')


module.exports = {
    async updateBalance(userId, amount) {
        const [results, metadata] = await sequelize.query(`
            BEGIN;
            select * from "Users" where id = ${userId} for update;
            UPDATE  "Users"
            SET balance = balance - ${amount} where id = ${userId} ;
            select * from "Users" where id = ${userId};
            COMMIT;`);
        return results
    }
}