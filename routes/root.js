const {Router} = require('express');
const router = Router();


router.get('',(req,res)=> {
    res.status(200).sendFile('index.html');
})


module.exports = router;