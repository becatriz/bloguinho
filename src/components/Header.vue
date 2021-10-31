<template>
  <header>
    <nav class="nav">
      <img class="nav__logo" alt="Logo Dojo" src="../assets/images/logo.png" />
      <a class="nav__link">Admin</a>
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

    &:hover {
      color: color("primary", "base");
    }
  }
}
</style>


