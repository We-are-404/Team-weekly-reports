<template>
    <div style="height: 100%;width: 100%">
        <router-view />
        <!-- 1. MainLayout path:'/'-->
        <!-- LoginLayout or MainLayout -->
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
}
html,body{
    overflow: hidden;
}
.layout,html,body {
    height: 100%;
    width: 100%;
}
</style>
