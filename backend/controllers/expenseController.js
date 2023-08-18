const expense = require('../models/expenseModel')
//const bcrypt = require('bcrypt');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

module.exports.signup =  async (req, res) => {
    try {
      const { email, password,confirmpassword } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ email, password: hashedPassword,confirmpassword:hashedPassword });
      res.status(201).json({ message: 'User created successfully.' }); 
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  }

module.exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body)

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
      const token = jwt.sign({ userId: user.id }, 'secret_key');
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred.' });
    }
  }

module.exports.getExpense = (req,res)=>{
    expense.findAll()
    .then((result)=>{
        res.status(200).json(result);
    })
}

module.exports.addExpense = (req,res)=>{
    const {amount,description,category} = req.body;
    expense.create({
        amount,
        description,
        category 
    })
    .then(res.sendStatus(200)) 
    .catch((err)=>{
        console.log(err);
    })
}

module.exports.deleteresExpense = (req,res)=>{
    let id = req.params.id;
    expense.destroy({where:{id:id}})
    .then(res.sendStatus(200))
    .catch(err=>{
        console.log(err);
    })
}

