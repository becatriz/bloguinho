<template>
  <section :class="{ container__larger: mediumScreenAndUp }">
    <div class="post-highlight row">
      <ul>
        <li
          class="m-6 s-12"
          v-for="post in $static.posts.edges.slice(0, 1)"
          :key="post.id"
        >
          <img :src="post.node.featuredImage" alt="post-destaque" />
        </li>
        <li class="m-6 s-12">
          <span class="post-highlight__label">
            {{ $static.posts.edges.slice(0, 1)[0].node.excerpt }}
          </span>
          <span class="post-highlight__hour">
            - {{ $static.posts.edges.slice(0, 1)[0].node.date }}</span
          ><br />
          <h2 class="post-highlight__title">
            {{ $static.posts.edges.slice(0, 1)[0].node.title }}
          </h2>
          <p class="post-highlight__text">
            {{ $static.posts.edges.slice(0, 1)[0].node.description }}
          </p>
        </li>
      </ul>
      <ReadMore
        class="component-readMore"
        :author="$static.posts.edges.slice(0, 1)[0].node.author"
        :path="$static.posts.edges.slice(0, 1)[0].node.path"
      />
    </div>
  </section>
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
export default {
  components: {
    ReadMore
  },

  mixins: [mediaQuery],

  mounted() {
    console.log(this.$static)
  }
}
</script>
<style scoped lang="scss">
.post-highlight {
  margin-top: 25px;
  border: 1px solid color("grey", "50");

  img {
    align-items: center;

    width: 30vw;
    height: 30vh;

    @media #{$small-and-down} {
      width: 70vw;
    }
  }

  &__label {
    @extend %label-inter-12-700;
    color: color("primary", "base");
  }

  &__hour {
    @extend %label-inter-12;
    color: color("grey", "600");
  }

  &__title {
    @extend %label-inter-30-900;
    height: 55px;
  }

  &__text {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
  }
}
</style>
