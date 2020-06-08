<template>
  <header>
    <div class="content">
      <div class="logo">
        <nuxt-link to="/">日記的ななにか</nuxt-link>
      </div>
      <nav class="navigation">
        <ul>
          <li><nuxt-link to="/">BLOG</nuxt-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  background-color: var(--dark-blue);
  color: var(--white);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: var(--pc-content-width);
    margin: 0 auto;
    padding: 0.5rem 0;
  }

  .logo {
    font-size: 2rem;
    a {
      color: var(--white);
      text-decoration: none;
    }
  }

  .navigation {
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      margin-left: 1.5em;
      list-style: none;
    }
    a {
      color: var(--white);
    }
  }
}
</style>
