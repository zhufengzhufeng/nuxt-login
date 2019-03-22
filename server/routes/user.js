let express = require('express');

let router = express.Router();
let UserModel = require('../db/user');
router.post('/login',async (req,res)=>{
    let {username,password} = req.body;
    let  u = await UserModel.findOne({username,password});
    if(u){
        req.session.user = u;
        res.json({
            err:0,
            data:'登录成功'
        })
    }else{
        res.json({
            err:1,
            data:'登录失败'
        })
    }
});
router.post('/reg',async (req,res)=>{
    let {username,password} = req.body;
    let  u = await UserModel.findOne({username});
    if(u){
        res.json({
            err:1,
            data:'用户名已存在'
        })
    }else{
        await UserModel.create({username,password});
        res.json({
            err:0,
            data:'注册成功'
        })
    }
})
router.get('/logout',(req,res)=>{
    
})

module.exports = router;