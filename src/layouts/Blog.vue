<template>
  <div>
    <Header />
    <Search class="component-search" />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata  {
    siteName
  }
}
</static-query>


<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Search from "../components/Search.vue"

export default {
  components: {
    Header,
    Footer,
    Search
  }
}
</script>


<style scoped lang="scss">
.component-search {
  text-align: center;
}
</style>
