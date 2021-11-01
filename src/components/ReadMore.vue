<template>
  <div class="read-more row">
    <div class="read-more__author m-8 s-6">Autor(a): {{ this.author }}</div>
    <g-link class="read-more__label m-4 s-6" :to="this.path">
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
  &__author {
    @extend %label-inter-12;
    margin-left: -16px;
  }

  &__label {
    @extend %label-inter-14-700;
    color: color("primary", "base");
    text-decoration: none;

    img {
      margin-bottom: -5px;
    }
  }
}
</style>