<template>
  <div class="layout">
    <header class="header">登录页</header>

    <!-- <router-view :user="user" /> -->

    <!-- <LoginRegisterInput :user="user" :type="true" @login="login"/> -->
    <LoginRegisterInput :user="user" :type="true" />
  </div>
</template>
<script>
import LoginRegisterInput from "../components/LoginRegisterInput";
import bus from "../bus";
export default {
  components: {
    LoginRegisterInput,
  },
  data() {
    return {
      header: "",
      user: {
        name: "",
        password: "",
      },
    };
  },
  methods: {
    login(user) {},
  },
  watch: {
    user(newVal) {
      console.log("watch ---", newVal.name);
    },
  },
  mounted() {
    bus.$on("login", (user) => {
      console.log("eventBus", user);
      this.user = user;
    });
  },
  beforeDestroy() {
    bus.$off("login");
  },
};
</script>

<style scoped>
.header {
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: pink;
  color: #ffffff;
  font-size: 16px;
}
</style>