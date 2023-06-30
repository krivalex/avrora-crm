<template>
  <details class="item">
    <summary>
      <h1>{{ item.title }}</h1>
      <p>{{ item.abscractCount }}</p>
      <p>{{ item.factCount }}</p>
    </summary>
    <div v-for="children in item.children">
      <OneItem :key="children.id" :item="children" />
    </div>
  </details>
</template>

<script lang="ts">

export default {
  name: 'OneItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.item);
    console.log(this.item);
  }
}


</script>


<style lang="scss" scoped>
.item {
  width: 100%;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: #f0f0f0;
  height: 60px;
}
</style>
