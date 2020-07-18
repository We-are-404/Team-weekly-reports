<template>
  <section class="column container__optional__wrapper">
    <div class="container__optional">
      <div class="my_md row_center">
        <img src="~@/assets/logo.png" style="width:200px;height:200px" />
      </div>
      <!-- <div class="my_md row_center">Vue</div> -->
      <div class="row_center">
        <transition name="fade" v-for="item in main" :key="item.url">
          <el-button type="primary" v-show="buttonShow" @click="to(item.url)">{{item.text}}</el-button>
        </transition>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OpenStage",
  data() {
    return {
      buttonShow: false,
      main: [
        { text: "Login", url: "login" },
        { text: "ToDoList", url: "todolist" }
      ]
    };
  },
  methods: {
    to(url) {
      if (this.$route.path !== url) {
        this.$router.push(url);
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.buttonShow = true;
    });
  }
};
</script>
<style lang="sass" scoped>
.container__optional__wrapper
  position: relative
  .container__optional
    position: absolute
    width: 100%
    left: 50%
    top: 30%
    transform: translate(-50%,-50%)

</style>