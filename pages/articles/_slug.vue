<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

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
          content: `${this.article.description}`
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/article';
</style>
