<template>
  <Layout>
    <Hero />
    <section>
      <Search class="component-search" />
    </section>
    <section>
      <Pill class="component-pill" />
    </section>
    <section :class="{ container__larger: mediumScreenAndUp }">
      <div class="post-highlight row">
        <ul>
          <li
            class="m-6 s-12"
            v-for="post in $page.posts.edges.slice(0, 1)"
            :key="post.id"
          >
            <img :src="post.node.featuredImage" alt="post-destaque" />
          </li>
          <li class="m-6 s-12">
            <span class="post-highlight__label">
              {{ $page.posts.edges.slice(0, 1)[0].node.excerpt }}
            </span>
            <span class="post-highlight__hour">
              - {{ $page.posts.edges.slice(0, 1)[0].node.date }}</span
            ><br />
            <h2 class="post-highlight__title">
              {{ $page.posts.edges.slice(0, 1)[0].node.title }}
            </h2>
            <p class="post-highlight__text">
              {{ $page.posts.edges.slice(0, 1)[0].node.description }}
            </p>
          </li>
        </ul>
        <ReadMore
          class="component-readMore"
          :author="$page.posts.edges.slice(0, 1)[0].node.author"
          :path="$page.posts.edges.slice(0, 1)[0].node.path"
        />
      </div>
    </section>
    <div :class="{ container__larger: mediumScreenAndUp }">
      <div class="row">
        <div v-for="post in $page.posts.edges" :key="post.id">
          <div class="m-4 s-12">
            <Card
              :excerpt="post.node.excerpt"
              :path="post.node.path"
              :img="post.node.featuredImage"
              :author="post.node.author"
              :title="post.node.title"
              :description="post.node.description"
            />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
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
</page-query>

<script>
import Hero from "../components/Hero.vue"
import Search from "../components/Search.vue"
import Pill from "../components/Pill.vue"
import ReadMore from "../components/ReadMore.vue"
import Card from "../components/Card.vue"

import mediaQuery from "../mixin/MediaQuery"

export default {
  metaInfo: {
    title: "Blog"
  },

  mixins: [mediaQuery],
  components: {
    Hero,
    Search,
    Pill,
    ReadMore,
    Card
  }
}
</script>

<style  lang="scss" scoped>
.component-search {
  text-align: center;

  @media #{$small-and-down} {
    text-align: inherit;
  }
}

.component-pill {
  margin-top: 40px;
}

.component-readMore {
  text-align: end;
}

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
