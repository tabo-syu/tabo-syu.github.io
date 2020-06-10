<template>
  <div>
    <h1>一覧</h1>
    <ul class="articleList">
      <li v-for="(article, index) in articles" :key="index" class="article">
        <nuxt-link :to="`${article.path}`">
          {{ article.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .sortBy('createdAt')
      .fetch()
    return {
      articles
    }
  }
}
</script>

<style lang="scss" scoped></style>
