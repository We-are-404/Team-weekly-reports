export default {
    to(url) {
        console.log(this);
        if (this.$route.path !== url) {
            this.$router.push({ path: url });
        }
    },
};