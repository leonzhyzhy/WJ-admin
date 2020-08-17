<template>
    <div class="login">
        <div class="login-bgimg">
            <div class="login-frame">
                <div class="login-tips">
                    <p>商业联盟管理系统</p>
                </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-form-item label="账户:" prop="username">
                        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="密码:" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button @click="resetForm('ruleForm')">重置</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    var validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        pass: ''
      },
      rules: {
        username: [
          { validator: validateUsername, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$store.dispatch('Login', this.ruleForm).then(() => {
            this.$router.push({ path: '/' })
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
    .login-bgimg {
        position:fixed;
        top: 0;
        left: 0;
        width:100%;
        height:100%;
        min-width: 1000px;
        z-index:-10;
        zoom: 1;
        background: url("../assets/login1.png");
        background-repeat: no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .login-frame {
            margin-right: 400px;
            width: 300px;
            background-color: #fff;
            border-radius: 5px;
            padding: 0 15px;
            .login-tips {
                padding: 15px 0;
                border-bottom: 1px solid gainsboro;
                height: 50px;
                line-height: 20px;
                font-weight: 600;
                font-size: 14px;
                color: #999999;
            }
            .login-input {
                padding: 0 15px 15px 15px;
                .login-username, .login-password {
                    width: 100%;
                    height: 36px;
                    margin-top: 30px;
                    color: #999999;
                    font-size: 12px;
                    display: flex;
                    .input-icon {
                        text-align: center;
                        height: 100%;
                        width: 36px;
                        line-height: 36px;
                        background-color: #f8f8f9;
                        height: 36px;
                        border: 1px solid gainsboro;
                        border-right: 0;
                        border-top-left-radius: 5px;
                        border-bottom-left-radius: 5px;
                    }
                    input {
                        height: 100%;
                        width: 234px;
                        line-height: 36px;
                        border: 1px solid gainsboro;
                        border-left: none;
                        border-top-right-radius: 5px;
                        border-bottom-right-radius: 5px;
                        color: #999999;
                    }
                }
            }
            .login-btn {
                padding: 15px 15px;
                .login-abtn {
                    cursor: pointer;
                    display: block;
                    border-radius: 5px;
                    width: 100%;
                    height: 36px;
                    background-color: #2d8cf0;
                    text-align: center;
                    line-height: 36px;
                    color: #ffffff;
                }
            }
            .footer-tips {
                padding: 15px;
                .cont {
                    text-align: center;
                    color: #999999;
                }
            }
        }
    }
</style>
<style lang="less">
.login-frame /deep/ .el-form.demo-ruleForm {
    margin-top: 20px;
}
.login-frame /deep/ .el-form-item__content {
    margin-left: 50px !important;
}
.login-frame /deep/ .el-form-item__label {
    width: 40px !important;
    text-align: left;
    padding: 0;
    margin-right: 10px;
}
.login-frame /deep/ .el-form-item.el-form-item--feedback {
    margin-top: 25px;
}
</style>
