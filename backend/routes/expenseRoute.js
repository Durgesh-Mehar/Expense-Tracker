const express = require('express');

const expenseControlleres = require('../controllers/expenseController')

const router  = express.Router();

//Authontication 
router.post('/signup', expenseControlleres.signup);

router.post('/login', expenseControlleres.login);

// For Expenses
router.get('/get-expense',expenseControlleres.getExpense)

router.post('/add-expense',expenseControlleres.addExpense);

router.delete('/delete-expense/:id',expenseControlleres.deleteresExpense)

module.exports = router;  