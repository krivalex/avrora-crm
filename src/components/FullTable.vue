<template>
  <section id="full-table">
    <div v-for="item in org.org.org">
      <OneItem :key="item.id" :item="item" />
    </div>
  </section>
</template>

<script lang="ts">
import OneItem from '@/components/OneItem.vue'

export default {
  name: 'FullTable',
  components: {
    OneItem
  },
  props: {
    org: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.org);
    console.log(this.org.org.org);
  }
}

</script>
