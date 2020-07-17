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
<style lang="sass">
*
  padding: 0
  margin: 0

#app
  width: 100vw
  height: 100vh

section.container
  height: 100%

.header
  height: 10%

.container__optional__wrapper
  height: 90%

.fade-enter-active, .fade-leave-active
  transition: opacity 1s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
