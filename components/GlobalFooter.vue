<template>
  <footer>
    <div class="content">© 2020 たぼすけ</div>
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
    max-width: var(--content-width);
    margin: 0 auto;
    padding: 0 var(--content-pad-horizontal);
    text-align: right;
    line-height: 2;
  }
}
</style>
