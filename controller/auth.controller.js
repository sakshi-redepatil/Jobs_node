const db = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = db.user;
const userlog = db.userlog;

module.exports = {
    userLogin: async (req, res) => {
        let { username, password } = req.body;
        user.findOne({ where: { Email: username } }).then(async data => {  // find user as per Email 
            
            console.log('data',data);

        let  activeSession=await userlog.findAll({ where: { userId: data.dataValues.id, status: true } })
        //then(result => {  // check active seeion in user log table
              console.log("result",activeSession);
                if (activeSession.length>0) {
                    res.send({ error: true, message: "User seeion is Active on another device! you want to logged out?" })
                }else{
                const isSame = bcrypt.compareSync(password, data.dataValues.Password);
                if (isSame) {
                let token = jwt.sign({ id: data.dataValues.id }, "jhdsgjfjs", { algorithm: 'HS256', expiresIn: '1h' });
                  // create log of every seeion keep token and userId as Active seession
               let log = {
                    userId: data.dataValues.id,
                    token: token,
                };
                await userlog.create(log);
                res.send({ error: false, token: token });
            } 
                }
           
        }).catch(err => {
            res.send({ error: true, message: err.message })
        })

    },
    sessionLogOut: (req, res) => {
        let { username } = req.body;
        user.findOne({ where: { Email: username } }).then(data => {
            userlog.update({ status: false }, { where: { userId: data.dataValues.id } }).then(result => {
                if (result) {
                    res.send({ error: true, message: "seesions are loged out ! now you can login on this device" })
                }
            }).catch(err => {
                res.send({ error: true, message: err.message })
            })
        });
    }
}

