<template>
  <section class="column container__optional__wrapper">
    <div class="container__optional">
      <div class="my_md row_center">
        <img src="~@/assets/logo.png" style="width:200px;height:200px" />
      </div>
      <div class="my_md row_center">Vue</div>
      <div class="row" style="height:5vh">
        <transition name="fade">
          <el-button type="primary" v-show="buttonShow">test</el-button>
        </transition>
        <el-button type="secondary" @click="buttonShow = !buttonShow">toggle</el-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "OpenStage",
  data() {
    return {
      buttonShow: false
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => {
        vm.buttonShow = true;
      }, 2000);
    });
  }
};
</script>
<style lang="sass" scoped>
.container__optional__wrapper
    position: relative
.container__optional
    position: absolute
    left: 50%
    top: 30%
    transform: translate(-50%,-50%)

</style>