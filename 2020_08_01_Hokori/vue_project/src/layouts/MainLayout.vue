<template>
    <div class="layout">
    </div>
</template>
<script>
export default {
    beforeRouteEnter (to, from, next){
        next (vm => {
            vm.$router.replace('/user/login')
        })
    }
}
</script>
<style scoped>

</style>