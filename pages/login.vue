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
                <el-form-item>
                    <el-button @click="submit">提交 </el-button>
                </el-form-item>
            </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    middleware:['login'],
    data(){
        return {
            ruleForm:{username:'',password:''},
            rules:{
                username:[{required:true,trigger:'blur',message:'需要填写用户名'}],
                password:[{required:true,trigger:'blur',message:'需要填写密码'}]
            }
        }
    },
    methods:{
        submit(){
            this.$refs['ruleForm'].validate(async (valide)=>{
                if(valide){
                    let {data} =  await this.$axios.post('/user/login',this.ruleForm);
                    if(data.err != 1){
                        window.location.href = '/'
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
