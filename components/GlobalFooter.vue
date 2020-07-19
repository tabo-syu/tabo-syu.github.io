<template>
  <footer>
    <div class="content">
      <address class="contact">
        <ul>
          <li>
            <a
              href="https://twitter.com/tabo_syu"
              rel="nofollow,noopener,noreferrer"
              target="_blank"
              >Twitter</a
            >
          </li>
          <li>
            <a
              href="https://github.com/bambshot"
              rel="nofollow,noopener,noreferrer"
              target="_blank"
              >GitHub</a
            >
          </li>
        </ul>
      </address>
      <small class="copyright">© 2020 たぼすけ</small>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--dark-blue);
  color: var(--white);

  .content {
    display: flex;
    justify-content: space-between;
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 var(--content-pad-horizontal);
    text-align: right;
    line-height: 2;
  }

  .contact {
    font-style: normal;
    font-size: 1rem;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li {
      display: inline;
      margin-right: 0.5em;
    }
    a {
      color: var(--white);
    }
  }

  .copyright {
    font-size: 1rem;
  }
}
</style>
