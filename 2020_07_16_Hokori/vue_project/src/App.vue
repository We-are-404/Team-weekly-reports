<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style lang="scss">
@import "@/assets/index";
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
section.container {
  height: 100%;
}
.header {
  height: 10%;
}
.container__optional {
  height: 90%;
}
</style>
