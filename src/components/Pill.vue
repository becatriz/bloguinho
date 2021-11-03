<template>
  <div class="container">
    <div class="wrapper">
      <span class="text">{{ `#${this.text}` }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pill",

  props: {
    text: {
      type: String,
      default: "Label"
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .text {
    @extend %label-inter-16;
    text-align: center;
    cursor: pointer;

    border: 1px solid color("grey", "600");
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    border-radius: 30px;

    word-break: break-all;

    &active {
      border: 1px solid color("primary", "base");
    }
  }
}
</style>