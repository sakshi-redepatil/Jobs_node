var express = require('express');
var router = express.Router();
const userController=require('../controller/user.controller')
/* GET users listing. */
router.get('/getall',userController.getAll);
router.post('/create',userController.createUser);
router.post('/update/:id',userController.updateUser);

router.post('/delete/:id',userController.deleteUser);

router.post('/search/:id',userController.searchUser);

module.exports = router;
