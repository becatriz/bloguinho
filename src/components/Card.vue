<template>
  <div>
    <div class="card__img">
      <img alt="post" :src="this.img" width="100%" height="250px" />
    </div>
    <div>
      <h2 class="card__title">{{ this.title }}</h2>
      <p class="card__description">
        {{ this.description }}
      </p>
    </div>
    <ReadMore
      class="component-readMore"
      :author="this.author"
      :path="this.path"
    />
  </div>
</template>

<script>
import ReadMore from "../components/ReadMore.vue"

export default {
  name: "Card",
  components: {
    ReadMore
  },
  props: {
    img: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    author: {
      type: String,
      default: ""
    },
    path: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__title {
    color: ("secondary", "900");
    @extend %label-inter-20-700;
  }

  &__description {
    color: ("grey", "600");
    @extend %paragraph-inter-14;
  }

  &__img {
    padding: 0.5rem;
    margin-top: 30px;
    border: 1px solid #e5f4ff;
    border-radius: 5px;
  }
}
</style>