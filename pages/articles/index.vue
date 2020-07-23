<template>
  <div>
    <h1>記事一覧</h1>
    <ul class="articleList">
      <li v-for="(article, index) in articles" :key="index" class="articleItem">
        <nuxt-link :to="`${article.path}`">
          <time>{{ formatedCreatedAtList[index] }}</time>
          <h2>{{ article.title }}</h2>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['path', 'title', 'createdAt'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const formatedCreatedAtList = articles.map((article) => {
      const date = new Date(article.createdAt)
      const yyyy = date.getFullYear()
      const mm = ('00' + (date.getMonth() + 1)).slice(-2)
      const dd = ('00' + date.getDate()).slice(-2)
      return `${yyyy}/${mm}/${dd}`
    })
    return {
      articles,
      formatedCreatedAtList
    }
  },
  head() {
    return {
      meta: [
        { hid: 'description', name: 'description', content: '記事一覧ページ' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 1.5em;
}

.articleItem {
  border-top: 1px solid var(--grey);
  &:last-child {
    border-bottom: 1px solid var(--grey);
  }
  a {
    display: block;
    padding: 40px 0;
    text-decoration: none;
    color: var(--black);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
