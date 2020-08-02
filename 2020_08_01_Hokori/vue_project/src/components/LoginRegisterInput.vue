<template>
  <div class="login-container">
    <div class="login-input-container">
      <el-input v-model="user.name" clearable placeholder="请输入账号"></el-input>
      <el-input v-model="user.password" placeholder="请输入密码" type="password"></el-input>
    </div>
    <div class="login-button-container">
      <el-button type="primary" @click="login" v-if="this.type">登录</el-button>
      <el-button type="success" @click="handleRegister">注册</el-button>
    </div>
  </div>
</template>

<script>
import bus from '../bus'
export default {
  name: "LoginRegisterInput",
  props: {
    user: {
      type: Object,
    },
    /**
     * @param { Boolean } type
     * true: 'login', false: 'register'
     */
    type: {
      type: Boolean,
    },
  },
  data() {
    return {
      tempUser: JSON.parse(JSON.stringify(this.user)),
    };
  },
  methods: {
    login() {
      // console.log('login')
      bus.$emit("login", this.user);
    },
    handleRegister() {
      if (this.type) {
        toRegister();
      } else {
        register();
      }
    },
    toRegister() {
      this.$router.push("/login/register");
    },
    register() {
      
    },
  },
};
</script>

<style scoped>
.login-container {
  height: calc(100% - 8vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  transform: translateY(-10%);
}

.login-input-container >>> input {
  margin: 10px 0;
}
</style>