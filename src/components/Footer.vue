<template>
  <div class="footer">
    <p>Made with blood in the eyes.</p>
    <h3>Kim.fun</h3>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>

  .footer {
    margin-top: 15px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    /* font-family: Roboto !important; */
    background: white;
    padding: 30px 20px 45px;

    h3 {
      margin-top: 20px;
    }

  }
</style>
