<template>
  <div class="dialog" v-if="show" @click="hideModal">
    <div @click.stop class="dialog-content">
      <slot></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "my-modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update: show", false);
    },
  },
}

</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  overflow-y: auto;

  .dialog-content {
    background-color: transparent;
    margin: auto;
    padding: 17px 30px;
    min-width: 50px;
    min-height: 300px;
    position: relative;

  }
}


@media screen and (max-width: 768px) {
  .dialog-content {
    max-width: 500px;
    transform: scale(0.85);
  }

  .dialog-content {
    padding: 50px;
  }

  .dialog-content h1 {
    font-size: 2rem;
  }

  .dialog-content p {
    font-size: 1.5rem;
  }

  .dialog-content button {
    font-size: 1.5rem;
  }

  .dialog-content input {
    font-size: 1.5rem;
  }

  .dialog-content label {
    font-size: 1.5rem;
  }

  .dialog-content select {
    font-size: 1.5rem;
  }

  .dialog-content textarea {
    font-size: 1.5rem;
  }

}
</style>
