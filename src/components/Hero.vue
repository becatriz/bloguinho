<template>
  <div class="wrapper">
    <div class="container">
      <div class="row">
        <p v-if="mediumScreenAndUp" class="title m-6 s-12">
          Conteúdo de <span>dev.</span> para <span>dev.</span>
        </p>
        <img
          class="m-6 s-12"
          alt="Imagem menino"
          src="../assets/images/svg/boy.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mediaQuery from "../mixin/MediaQuery"

export default {
  name: "Hero",
  mixins: [mediaQuery]
}
</script>

<style lang="scss" scoped>
.container {
  padding: 0;
}

.wrapper {
  background: color("grey", "100");
  height: 567px;

  @media #{$small-and-down} {
    height: 150px;
  }

  img {
    margin-top: 50px;
  }
}

.title {
  @extend %display-inter-60-900;
  margin-top: 150px;
  span {
    color: color("primary", "base");
  }
}
</style>