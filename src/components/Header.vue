<template>
  <header>
    <nav class="nav">
      <img class="nav__logo" alt="Logo Dojo" src="../assets/images/logo.png" />
      <g-link class="nav__link" to="/admin" target="_blank">Admin</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Hero"
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0 1rem 0;

  &__logo {
    display: block;
    margin: 0 auto;
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


