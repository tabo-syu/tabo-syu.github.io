<template>
  <div>
    <GlobalHeader />
    <main>
      <nuxt />
    </main>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader'
import GlobalFooter from '~/components/GlobalFooter'
export default {
  components: {
    GlobalHeader,
    GlobalFooter
  }
}
</script>

<style lang="scss" scoped>
main {
  width: var(--pc-content-width);
  margin: 0 auto;
  padding: var(--pc-content-pad-vertical) 0;
}
</style>
