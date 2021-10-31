<template>
  <div>
    <g-link class="read-more" :to="this.path">
      {{ this.text }}

      <img
        class="read-more__image"
        alt="ler mais"
        src="../assets/images/arrow.png"
      />
    </g-link>
  </div>
</template>

<script>
export default {
  name: "ReadMore",
  props: {
    path: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      text: "Leia mais"
    }
  }
}
</script>

<style lang="scss" scoped>
.read-more {
  @extend %label-inter-14-700;
  color: color("primary", "base");
  text-decoration: none;

  &__image {
    margin-bottom: -5px;
  }
}
</style>