<template>
  <div>
    <div class="card__img">
      <img alt="post" :src="this.img" width="100%" height="250px" />
    </div>
    <p class="card__excerpt">{{ this.excerpt }}</p>
    <h2 class="card__title">{{ this.title }}</h2>
    <p class="card__description">
      {{ this.description }}
    </p>
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
    },
    excerpt: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &__excerpt {
    padding-top: 30px;
    @extend %label-inter-12;
    color: color("primary", "base");
  }

  &__title {
    color: ("secondary", "900");
    @extend %label-inter-20-700;
  }

  &__description {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
  }

  &__img {
    padding: 0.5rem;
    margin-top: 30px;
    border: 1px solid #e5f4ff;
    border-radius: 5px;
  }
}
</style>