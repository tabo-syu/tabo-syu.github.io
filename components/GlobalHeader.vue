<template>
  <header>
    <div class="content">
      <div class="logo">
        <nuxt-link to="/">tabo_syu note</nuxt-link>
      </div>
      <nav class="navigation">
        <ul>
          <li><nuxt-link to="/articles">NOTES</nuxt-link></li>
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
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0.5rem var(--content-pad-horizontal);
  }

  .logo {
    font-size: 2rem;
    @media screen and (max-width: 767px) {
      font-size: 1.3rem;
    }
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
