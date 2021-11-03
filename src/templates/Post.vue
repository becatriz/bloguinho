<template>
  <BlogLayout>
    <section
      style="margin-top: 56px;"
      :class="{ container__larger: mediumScreenAndUp }"
    >
      <div class="row">
        <div class="grid">
          <div class=" post m-9">
            <img class="post__img" :src="$page.post.featuredImage" alt="blog" />
            <span class="post__tag">{{ $page.post.tag }}</span>
            <h1 class="post__title">{{ $page.post.title }}</h1>
            <span class="post__author">{{ $page.post.author }} </span>
            <span class="post__date">{{ $page.post.date }} </span>
            <div class="post__content" v-html="$page.post.content" />
          </div>
          <div class="m-3"><TagsList :list="getTagsList" /></div>
        </div>
      </div>
    </section>

    <div
      style="margin-bottom: 50px;"
      :class="{ container__larger: mediumScreenAndUp }"
    >
      <div class="row">
        <div class="grid">
          <div v-for="post in $static.posts.edges" :key="post.id">
            <div class="m-4 s-12">
              <Card :post="post" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </BlogLayout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    content
    featuredImage
    excerpt
    author
    date
    tag
  }
}
</page-query>

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

  tags: allTag {
    edges {
      node {
        tag
      }
    }
  }
}
</static-query>

<script>
import Card from "../components/Card.vue"
import MediaQuery from "../mixin/MediaQuery"
import TagsList from "../components/TagsList.vue"

export default {
  mixins: [MediaQuery],
  components: {
    Card,
    TagsList
  },

  computed: {
    getTagsList() {
      return this.$static.tags.edges.map(({ node }) => node.tag)
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  &__img {
    width: 100%;
    margin-bottom: 20px;
  }

  &__tag {
    display: inline-block;
    @extend %label-inter-20;
    color: color("primary", "base");
    margin-bottom: 5px;
  }

  &__title {
    @extend %paragraph-inter-40-700;
    color: color("secondary", "900");
    margin-bottom: 20px;
  }

  &__author,
  &__date,
  &__content {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
  }

  &__author {
    margin-right: 10px;
    margin-bottom: 20px;
  }
}
</style>
