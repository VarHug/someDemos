<template>
  <div class="technical">
    <div class="technical-header">
      <img src="../../common/images/news_nav1.jpg">
    </div>
    <div class="intro-wrapper">
      <factory-intro></factory-intro>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import factoryIntro from '../../components/factory-intro/factory-intro';

export default {
  data() {
    return {

    };
  },
  components: {
    factoryIntro
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.technical
  .technical-header
    width 100%
    overflow hidden
    font-size 0
  .intro-wrapper
    padding 50px 100px
</style>
