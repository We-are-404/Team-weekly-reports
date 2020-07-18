<template>
  <div class="px_md">
    <input :value="customObject.text" @keydown="change($event)" />
    <el-button @click="edit()">edit</el-button>
  </div>
</template>

<script>
export default {
  props: {
    customObject: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      tempStr: ""
    };
  },

  methods: {
    edit() {
        console.log('edit',this.tempStr)
      this.$emit("edit", this.tempStr);
    },
    change(e) {
      this.tempStr = e.target.value;
      console.log("change", e.target.value, this.tempStr);
    }
  }
};
</script>

<style>
</style>