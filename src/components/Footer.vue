<template>
  <div class="footer">
    <p>
      <span class="footer__name">dev.blog </span>
      <span class="footer__copyright">2021 copyright all rights reserved </span>
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid #e8e8e8;
  width: 70%;
  text-align: center;
  margin: 0 auto;

  &__name {
    @extend %label-inter-16-700;
  }

  &__copyright {
    @extend %label-inter-12;
  }
}
</style>


