module.exports=(Sequelize,sequelize)=>{
   const model=sequelize.define('userlog',{
    id:{
        type:Sequelize.DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    userId:{
         type:Sequelize.DataTypes.INTEGER,
         allowNull:false,
    },
    token:{
        type:Sequelize.DataTypes.STRING(100),
        allowNull:false
    },
    status:{
        type:Sequelize.DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
   },{
    freezeTableName: true,
   });
   return model;
}