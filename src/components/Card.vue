<template>
  <div class="card">
    <div class="card__img">
      <img
        alt="post"
        :src="post.node.featuredImage"
        width="100%"
        height="250px"
      />
    </div>
    <p class="card__tag">{{ post.node.tag }}</p>
    <h2 class="card__title">{{ post.node.title }}</h2>
    <p class="card__description">
      {{ post.node.description }}
    </p>
    <ReadMore
      class="component-readMore"
      :author="post.node.author"
      :path="post.node.path"
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
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  border: 1px solid #e5f4ff;
  border-radius: 5px;
  padding: 10px;
  &__tag {
    @extend %label-inter-12;
    color: color("primary", "base");
    padding-bottom: 5px;
  }

  &__title {
    color: ("secondary", "900");
    @extend %label-inter-20-700;
    padding-bottom: 7px;
  }

  &__description {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
    padding-bottom: 22px;
  }

  &__img {
    padding-bottom: 16px;
  }
}
</style>
