const Sequelize=require('sequelize');

const sequelize=new Sequelize('node-sql-complete','root','Dhruv@2808',{
    dialect:'mysql',
    host:'localhost'
})
module.exports=sequelize;