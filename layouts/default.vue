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
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--content-pad-vertical) 15px;
  @media screen and (max-width: 767px) {
    padding: 60px 15px var(--content-pad-vertical);
  }
}
</style>
