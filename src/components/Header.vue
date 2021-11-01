<template>
  <header>
    <nav class="nav">
      <img class="nav__logo" alt="Logo Dojo" src="../assets/images/logo.png" />
      <g-link
        v-if="mediumScreenAndUp"
        class="nav__link"
        to="/admin"
        target="_blank"
      >
        Sing in with Github
      </g-link>

      <g-link to="/admin" target="_blank">
        <img class="nav__img" src="../assets/images/github.png" />
      </g-link>
    </nav>
  </header>
</template>

<script>
import mediaQuery from "../mixin/MediaQuery"
export default {
  name: "Hero",
  mixins: [mediaQuery]
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;

  &__logo {
    display: block;
    margin: 0 auto;
  }

  &__img {
    margin-top: 10px;
    width: 30px;
    height: 30px;
  }

  &__link {
    @extend %label-inter-16;
    padding: 1rem 1rem 1rem 0;
    transition: color 0.5s;
    text-decoration: none;

    &:visited {
      color: color("grey", "600");
    }

    &:hover {
      color: color("primary", "base");
    }
  }
}
</style>


