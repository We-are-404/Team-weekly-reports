<template>
  <div>
    index=========
    <router-link to="signin">去登录</router-link>
    <br />
    <el-button type="primary">按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    beforeCreated() {
      console.log("bcreated");
    },
    created() {
      console.log("created");
    },
    beforeRouteEnter(to, form, next) {
      next((vm) => {
        console.log(vm);
        vm.$router.push("/signin");
      });
    },
  },
};
</script>

<style>
</style>