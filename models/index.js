const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('aft_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("connected with db")
}).catch((err) => {
    console.log(err)
});

const db={};

db.Sequelize=Sequelize;
db.sequelize=sequelize;

db.user=require('./user.model')(Sequelize,sequelize);
db.userlog=require('./userlog.model')(Sequelize,sequelize);

module.exports=db;

