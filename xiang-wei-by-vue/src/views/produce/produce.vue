<template>
  <div class="produce">
    <div class="produce-header">
      <img src="../../common/images/news_nav2.jpg">
    </div>
    <div class="intro-wrapper">
      <product-intro></product-intro>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import productIntro from '../../components/product-intro/product-intro';

export default {
  data() {
    return {

    };
  },
  components: {
    productIntro
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.produce
  .produce-header
    width 100%
    overflow hidden
    font-size 0
  .intro-wrapper
    padding 50px 100px
</style>
