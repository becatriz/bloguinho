<template>
  <div class="list">
    <h1 class="list-title">Tags</h1>
    <ul>
      <li class="list-item" v-for="item in list" :key="item">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => ["Item 01", "Item 02", "Item 03"]
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  padding-inline-start: 0;
}

.list {
  width: 40%;
  margin: 0 auto;

  &-title {
    @extend %label-inter-20;
    color: color("primary", "base");
  }

  &-item {
    @extend %label-inter-16;
    list-style: none;
    padding-block: 20px;
    a {
      color: color("secondary", "900");
      text-decoration: none;
    }
  }
}
</style>
