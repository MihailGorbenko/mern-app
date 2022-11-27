const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bodyParser = require('body-parser');


const jsonParser = bodyParser.json()


router.post('/register',jsonParser,async (req,res) => {
    try{  
        const {email, password} = req.body
         const user = new User({email,password})
         await user.save()
         res.status(201).json({message: 'User created'})

    }catch (e){
        
        res.status(500).json({message: 'Something went wrong,try again!'})
    }
})

router.post('/login',async (req,res) => {

})

module.exports = router;