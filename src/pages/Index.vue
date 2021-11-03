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

    <LargeCard />

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
    console.log(this.$page)
  },

  /* EBLE - Criar mixin */
  computed: {
    getTagsList() {
      return this.$page.tags.edges.map(({ node }) => node.tag)
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
</style>
