<template>
  <div class="container">
    <div class="row search">
      <input
        class="search__input"
        type="search"
        placeholder="Buscar..."
        v-model="search"
      />

      <img
        @click="$emit('teste', search)"
        class="search__icon s-2"
        alt="busca"
        src="../assets/images/search.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  data: () => ({
    search: ""
  })
}
</script>

<style lang="scss" scoped>
.search {
  &__input {
    width: 50%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid color("grey", "600");
    border-radius: 25px;
    box-sizing: border-box;

    @media #{$small-and-down} {
      width: 100%;
    }
  }

  &__icon {
    margin-left: -40px;
    margin-bottom: -5px;
    width: 24px;
    height: 24px;
    cursor: pointer;

    &:active {
      transform: translateY(2px);
    }
  }
}
</style>
