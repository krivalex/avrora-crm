<template>
  <details class="item">
    <summary>
      <h1>{{ item.title }}</h1>
      <p>{{ item.abstractFullCount }}</p>
      <p>{{ item.factFullCount }}</p>
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
  max-width: calc(100vw - 30px);
  border: 1px solid black;
  margin: 10px 0px 0px 30px;
  border-radius: 10px;
  background-color: #f0f0f0;
  height: 60px;

  summary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 60px;
    padding: 10px;
  }
}
</style>
