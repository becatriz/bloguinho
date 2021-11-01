<template>
  <div>
    <Header />
    <slot />
    <Footer class="footer" />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 100px;
}
</style>


