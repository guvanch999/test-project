'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert("Users", [{
            balance: 10000,
            createdAt: Sequelize.fn("now"),
            updatedAt: Sequelize.fn("now"),
        }])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Users", {id: 1})
    }
};
