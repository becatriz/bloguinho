<template>
  <Layout>
    <Hero />
    <section>
      <Search class="component-search" @teste="handleSearch($event)" />
    </section>

    <section>
      <div class="container">
        <ul class="tags-list">
          <li v-for="tag in $page.tags.edges" :key="tag.node.tag">
            <Pill class="component-pill s-12" :text="tag.node.tag" />
          </li>
        </ul>
      </div>
    </section>

    <section
      style="margin-bottom: 50px"
      class="last-published-post-session"
      :class="{ container__larger: mediumScreenAndUp }"
    >
      <LargeCard :post="lastPublishedPost" />
    </section>

    <section
      style="margin-bottom: 75px"
      :class="{ container__larger: mediumScreenAndUp }"
    >
      <div class="row">
        <div :class="{ grid: mediumScreenAndUp }">
          <div
            v-for="post in $page.posts.edges"
            :key="post.id"
            class="m-4 s-12"
          >
            <Card :post="post" />
          </div>
        </div>
      </div>
    </section>

    <section :class="{ container__larger: mediumScreenAndUp }">
      <div class="row">
        <div class="grid">
          <div class="m-8">
            <div
              style="margin-bottom: 60px;"
              v-for="post in $page.posts.edges"
              :key="post.id"
            >
              <LargeCard :post="post" />
            </div>
          </div>
          <div class="m-4 s-12"><TagsList :list="getTagsList" /></div>
        </div>
      </div>
    </section>
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
        tag
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
</page-query>

<script>
import Hero from "../components/Hero.vue"
import Search from "../components/Search.vue"
import Pill from "../components/Pill.vue"
import ReadMore from "../components/ReadMore.vue"
import Card from "../components/Card.vue"
import TagsList from "../components/TagsList.vue"
import LargeCard from "../components/LargeCard.vue"

import mediaQuery from "../mixin/MediaQuery"

export default {
  metaInfo: {
    title: "Blog"
  },

  data: () => ({
    search: ""
  }),

  mixins: [mediaQuery],
  components: {
    Hero,
    Search,
    Pill,
    ReadMore,
    Card,
    TagsList,
    LargeCard
  },

  computed: {
    getTagsList() {
      return this.$page.tags.edges.map(({ node }) => node.tag)
    },

    lastPublishedPost() {
      return this.$page.posts.edges[0]
    },

    searchResults() {
      return this.$page.posts.edges.filter(post => {
        return post.node.title
          .toLowerCase()
          .includes(this.search.toLowerCase().trim())
      })
    }
  },

  methods: {
    handleSearch(event) {
      this.search = event
    }
  }
}
</script>

<style lang="scss" scoped>
.component-search {
  text-align: center;

  @media #{$small-and-down} {
    text-align: inherit;
  }
}

.component-readMore {
  text-align: end;
}

.tags-list {
  display: flex;
  justify-content: space-between;
  padding-block: 50px;

  @media #{$small-and-down} {
    display: block;
    padding: 0;
  }
}

.last-published-post-session {
  padding: 8px;
  border: 1px solid #e5f4ff;
  border-radius: 5px;
}
</style>
