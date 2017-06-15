
const Sequlize = require ('sequelize');

let sequelize = new Sequelize('database','root');

sequelize.define('User',{
    name:Sequlize.STRING,
    age:Sequlize.INTEGER
});

User.sync({force:true});

User.create({
    name:'wanglu',
    age:23
});

//selete
User.findAll({
    attributes:['name',['age','num']],           //select name age as num from...
    where:{                                      //where name = 'jinzhi' and age = 23
        name:'jinzhi',
        age:23
    }
});

//delete
User.destory({                                   // delete from user where name = 'gaomaoshen'
    where:{
        name:'gaomaoshen'                       
    }
});

//update 
User.update({                                    //update user set name = 'kiko' where age != null
    name:'kiko'},
    {
        where:{
            age:{
                $ne:null
            }
        }
});