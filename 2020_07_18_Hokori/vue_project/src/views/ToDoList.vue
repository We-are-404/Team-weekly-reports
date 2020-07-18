<template>
  <section>
    <div class="row">
      <input type="text" v-model="text" class="mx_md" />
      <el-button type="primary" @click="add()">submit</el-button>
    </div>
    
    <ul>
      <li v-for="(item,index) in arr" v-bind:key="item+index">
        {{item}}
        <el-button @click="remove(index)">remove</el-button>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      arr: []
    };
  },
  methods: {
    add() {
      this.arr.push(this.text);
      this.text = "";
    },
    remove(index) {
      this.arr.splice(index, 1);
    }
  }
};
</script>