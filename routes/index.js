const router = require("express").Router();

const BalanceController = require('../controllers/BalanceController')
router.put('/update-balance', BalanceController.updateBalance)

module.exports = router


