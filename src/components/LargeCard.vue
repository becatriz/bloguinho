<template>
  <div class="row">
    <div class="large-card__image m-5 s-12">
      <img class="" :src="post.node.featuredImage" alt="post-destaque" />
    </div>
    <div class="">
      <p class="large-card__label">
        {{ post.node.tag }} -
        <span class="large-card__hour">{{
          getDateFormatted(post.node.date, "pt-BR")
        }}</span>
      </p>
      <h2 class="large-card__title">
        {{ post.node.title }}
      </h2>
      <p class="large-card__text">
        {{ post.node.description }}
      </p>
      <ReadMore
        class="component-readMore"
        :author="post.node.author"
        :path="post.node.path"
      />
    </div>
  </div>
</template>

<static-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        path
        featuredImage
        description
        author
        date
        excerpt
      }
    }
  }
}
</static-query>

<script>
import ReadMore from "../components/ReadMore.vue"
import mediaQuery from "../mixin/MediaQuery"
import dateConvert from "../utils/dateConvert"
import getDateFormatted from "../mixin/getDateFormatted.mixin"

export default {
  components: {
    ReadMore
  },

  props: {
    post: {
      type: Object
    }
  },

  mixins: [mediaQuery, getDateFormatted]
}
</script>
<style scoped lang="scss">
.large-card {
  display: flex;

  &__info {
    display: flex;
    flex-direction: column;

    &.m-7 {
      padding-bottom: 8px;
      margin-bottom: 0;
    }
  }

  &__image {
    img {
      width: 100%;
    }

    &.m-5 {
      margin-bottom: 0;
    }
  }

  &__label {
    @extend %label-inter-12-700;
    color: color("primary", "base");
    padding-bottom: 12px;
  }

  &__hour {
    @extend %label-inter-12;
    color: color("grey", "600");
  }

  &__title {
    @extend %label-inter-30-900;
    height: 55px;

    @media #{$small-and-down} {
      margin-bottom: 50px;
    }
  }

  &__text {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
    flex: 1;
  }
}
</style>
