<template>
  <BlogLayout>
    <div class="container">
      <div class="post">
        <img class="post__img" :src="$page.post.featuredImage" alt="blog" />
        <span class="post__excerpt">{{ $page.post.excerpt }}</span>
        <h1 class="post__title">{{ $page.post.title }}</h1>
        <span class="post__author">{{ $page.post.author }} </span>
        <span class="post__date">{{ $page.post.date }} </span>
        <div class="post__content" v-html="$page.post.content" />
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
  }
}
</page-query>

<style lang="scss" scoped>
.post {
  &__img {
    margin-top: 50px;
    width: 100%;
    height: 550px;
  }

  &__excerpt {
    display: inline-block;
    margin-top: 30px;
    @extend %label-inter-20;
    color: color("primary", "base");
  }

  &__title {
    @extend %paragraph-inter-40-700;
    color: color("secondary", "900");
  }

  &__author,
  &__date,
  &__content {
    @extend %paragraph-inter-14;
    color: color("grey", "600");
  }

  &__author {
    margin-right: 10px;
  }

  h1 {
    height: 30px;
  }
}
</style>
