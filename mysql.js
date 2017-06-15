
const Sequlize = require ('sequelize');

let sequelize = new Sequelize('database','root');

sequelize.define('User',{
    name:Sequlize.STRING,
    age:Sequlize.INTEGER
});

sequelize.sync();

sequelize.create();

sequelize.findAll({
    attributes:['name',['age','num']],             //select name age as num from...
    where:{                                        //where name = 'jinzhi' and age = 23
        name:'jinzhi',
        age:23
    }
});