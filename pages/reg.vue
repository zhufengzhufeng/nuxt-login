<template>
    <div>
        <el-row>
            <el-col :span="12" :offset="6">
            <el-form style="margin-top:20px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="respassword">
                    <el-input v-model="ruleForm.respassword"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="submit">注册</el-button>
                </el-form-item>
            </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            ruleForm:{username:'',password:'',respassword:''},
            rules:{
                username:[{required:true,trigger:'blur',message:'需要填写用户名'}],
                password:[
                    {required:true,trigger:'blur',message:'需要填写密码'},
                    {validator:(rule, value,cb)=>{
                        console.log(this,'----');
                        if(value != this.ruleForm.respassword){
                            cb('两次密码不一致')
                        }else{
                            cb()
                        }
                    },trigger:'blur'}],
                respassword:[
                    {required:true,trigger:'blur',message:'重复密码不一致'},
                    {validator:(rule, value,cb)=>{
                        if(value != this.ruleForm.password){
                            cb('两次密码不一致')
                        }else{
                            cb()
                        }
                    },trigger:'blur'}]
            }
        }
    },
    methods:{
        submit(){
            this.$refs['ruleForm'].validate(async (valide)=>{
                if(valide){
                    let {data} =  await this.$axios.post('/user/reg',this.ruleForm);
                    if(data.err != 1){
                        this.$router.push('/login');
                    }
                }else{
                    return false
                }
            })
        }
    },  
    layout:'other',
}
</script>
