
var express = require('express');
var router = express.Router();
const {userLogin,sessionLogOut}=require('../controller/auth.controller')

router.post('/login',userLogin);

router.post('/logout',sessionLogOut);

module.exports=router;