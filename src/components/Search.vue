<template>
  <div class="">
    <div class="row">
      <div class="m-12">
        <input class="search" type="search" placeholder="Buscar..." />
        <img
          class="search__icon"
          alt="busca"
          src="../assets/images/search.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid color("grey", "600");
  padding: 0.6rem;
  border-radius: 25px;
  width: 30%;

  @media #{$small-and-down} {
    width: 100%;
  }

  &__icon {
    margin-bottom: -5px;
    margin-left: -30px;
  }
}
</style>