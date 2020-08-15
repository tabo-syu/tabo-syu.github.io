<template>
  <article>
    <ul class="categoryList">
      <li v-for="(category, index) in article.categories" :key="index">
        {{ category }}
      </li>
    </ul>
    <nuxt-content :document="article" />
  </article>
</template>

<style lang="scss" scoped>
.categoryList {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;

  li {
    background-color: var(--dark-blue);
    color: var(--white);
    margin-right: 0.5em;
    padding: 0.2em 1em;
    border-radius: 1.4em;
  }
}
</style>

<script>
export default {
  async asyncData({ params, $content }) {
    const article = await $content('articles', params.slug).fetch()
    return {
      article
    }
  },
  head() {
    if (!this.article.description) return
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description
        }
      ]
    }
  }
}
</script>
