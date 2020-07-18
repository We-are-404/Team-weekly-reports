<template>
  <section class="container">




    
    <header class="header flex_center text_white bg_primary">
      <h3 class='ml_lg'>404 Vue技术分享会</h3>
      <h6 class='ml_md align-self_end pb_lg'>By Hokori</h6>
    </header>




    <router-view></router-view>
  </section>
</template>
<script>
export default {
  name: "CommonLayout"
};
</script>
<style lang="sass">
.fade-enter-active, .fade-leave-active 
    transition: opacity 1s

.fade-enter, .fade-leave-to 
    opacity: 0

</style>