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
            <Pill class="component-pill" :text="tag.node.tag" />
          </li>
        </ul>
      </div>
    </section>

    <!-- <TagsList :list="getTagsList" /> -->

    <section
      class="last-published-post-session"
      :class="{ container__larger: mediumScreenAndUp }"
    >
      <LargeCard :post="lastPublishedPost" />
    </section>

    <section :class="{ container__larger: mediumScreenAndUp }">
      <div class="row">
        <div class="grid">
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

  watch: {
    search(value) {
      console.log("mudou", value)
    }
  },

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

  /* EBLE */
  mounted() {
    console.log(this.$page.posts, "page")
  },

  /* EBLE - Criar mixin */
  computed: {
    getTagsList() {
      return this.$page.tags.edges.map(({ node }) => node.tag)
    },

    lastPublishedPost() {
      return this.$page.posts.edges[0].node
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
}

.last-published-post-session {
  padding: 8px;
  border: 1px solid #e5f4ff;
  border-radius: 5px;
}
</style>
