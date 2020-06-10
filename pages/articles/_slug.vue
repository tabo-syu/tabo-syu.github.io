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
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/article';
</style>
