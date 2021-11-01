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
        <ul class="m-6 s-12">
          <li v-for="post in $page.posts.edges.slice(0, 1)" :key="post.id">
            <img
              class="post-highlight__image"
              :src="post.node.featuredImage"
              alt="post-destaque"
            />
          </li>
        </ul>
        <div class="m-6 s-12">
          <span class="post-highlight__label">Front-end </span>
          <span class="post-highlight__hour"> . 1 Hour Ago</span><br />
          <h2 class="post-highlight__title">
            Optimizing CSS for faster page loads
          </h2>
          <p class="post-highlight__text">
            Not long ago I decided to improve the loading times of my website.
            It already loads pretty fast, but I knew there was still room for
            improvement and one of them was CSS loading. I will walk you through
            the process and show you how you can improve your load times as
            well. To see how CSS affects the load time of a webpage we first
            have to know how the browser converts an HTML document into a
            functional webpage...
          </p>
        </div>

        <ReadMore
          class="component-readMore"
          :path="$page.posts.edges.slice(0, 1)[0].node.path"
        />
      </div>
    </section>
    <Card />
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
  &__image {
    width: 30vw;
    height: 30vh;

    @media #{$small-and-down} {
      width: 86vw;
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
