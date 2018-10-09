<template>
  <div class="detail" v-show="showFlag">
    <h1 class="title">简美风格 高雅明亮 皮拉扣靠背光泽感佳</h1>
    <div class="pic">
      <img width="100%" src="../../common/images/det-pic.jpg">
    </div>
    <p class="text">对现代人的生活而言，沙发已经成为不可缺少的家居用品。然而皮质沙发做到了经历时间的磨练，经久不衰，以其富丽堂皇、豪华大气、结实耐用的特点一直受到人们的喜爱。在我们的印象中，传统真皮沙发色彩较为单调，以棕、褐色为主，造型庞大而讲究豪华，占地大，给人严肃稳重而活泼不够的感觉。而时下，各种元素混搭成为各个领域的弄潮儿，皮质沙发保持它豪华的气质以外，融合了各种丰富的元素，沙发的色彩变得鲜艳丰富，造型轻快简洁，极富现代和时尚感。</p>
    <p class="text">简美风格的沙发看起来奢华贵气，在私人别墅、大腕豪宅里几乎是必不可少的客厅家具。皮沙发的华贵所产生的 威严和气派是布艺沙发难以企及的。沙发的质感很特别，柔韧性和耐磨性比布艺沙发强很多，给人不一样的享受。皮沙发的日常打理是比较方便的。平时只需要将湿毛巾拧干后擦拭表面即可。每个季度用专用清洁剂清 洁护理一遍即可。皮沙发的款式也逐渐时尚起来，越来越漂亮，享受高品位生活。皮艺沙发款式多、样式新。是皮艺沙发中不二的选择。</p>
    <el-button type="primary">阅读更多</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showFlag: false
    };
  },
  methods: {
    show() {
      this.showFlag = true;
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.detail
  margin 0 auto
  width 1024px
  .title
    line-height 50px
    font-size 20px
    color #0085c2
  .pic
    margin-bottom 10px
    padding 5px
    border-radius 5px
    background #fff
  .text
    line-height 30px
    text-indent 2em
    font-size 16px
@media screen and (max-width 600px)
  .detail
    padding 0 10px
    width 100%
    box-sizing border-box
</style>
