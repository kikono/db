
const mongoose = require('mongoose');

let md = mongoose.createConnection('mongodb://127.0.0.1:27017/mongotest')
let Schema = mongoose.Schema;

let userSchame = new Schema({
    brand:{type:String,default:NULL},
    color:{type:String,default:NULL},
    create_name:{type:String,default:NULL},
    age:{type:Number,default:NULL},
    create_data:{type:Date,default:NULL}
});

let userModel = md.model('car',userSchema);