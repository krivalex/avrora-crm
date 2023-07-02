<template>
  <div class="button-container">
    <button class="add-button" @click="addNew">Добавить орг. структуру</button>
  </div>
</template>

<script lang="ts">
import MyModal from '@/components/UI/MyModal.vue';

export default {
  name: 'AddButton',
  components: {
    MyModal
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    addNew() {
      this.$emit('addNew');
    }
  }
}

</script>

<style lang="scss" scoped>
.button-container {
  max-width: calc(100vw - 30px);
  border: 1px solid black;
  margin: 10px 0px 0px 30px;
  border-radius: 10px;
  background-color: #f0f0f0;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  button {
    text-decoration: none;
    background-color: #f0f0f0;
    border: none;
    font-size: 20px;
  }
}
</style>
