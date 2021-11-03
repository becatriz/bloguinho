<template>
  <div class="read-more row">
    <p class="read-more__author">Autor(a): {{ this.author }}</p>
    <g-link class="read-more__label" :to="this.path">
      {{ this.text }}
      <img alt="ler mais" src="../assets/images/arrow.png" />
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
    },
    author: {
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
  display: flex;
  &__author {
    flex: 1;
    @extend %label-inter-12;
    color: color("grey", "600");
  }

  &__label {
    display: flex;
    @extend %label-inter-14-700;
    color: color("primary", "base");
    text-decoration: none;
  }
}
</style>
