<template>
  <article>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content('index').fetch()
    return {
      page
    }
  }
}
</script>
