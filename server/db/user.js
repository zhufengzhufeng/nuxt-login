let mongoose = require('mongoose');


let conn = mongoose.createConnection('mongodb://localhost:27017/zhufeng');

let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
});

module.exports = conn.model('User',UserSchema);