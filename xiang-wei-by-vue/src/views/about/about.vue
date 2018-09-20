<template>
  <div class="about">
    <div class="about-header">
      <img src="../../common/images/news_nav2.jpg">
    </div>
    <div class="about-wrapper">
      <company-intro></company-intro>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import companyIntro from '../../components/company-intro/company-intro';

export default {
  data() {
    return {

    };
  },
  components: {
    companyIntro
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.about
  .about-header
    width 100%
    overflow hidden
    font-size 0
  .about-wrapper
    padding 50px 0

</style>
