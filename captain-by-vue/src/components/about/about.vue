<template>
  <div class="about">
    <div class="about-us">
      <h1 class="title">关于我们</h1>
      <h2 class="sub-title">凯迪家具有限公司</h2>
      <div class="desc">
        <div class="main">
          <div class="text">凯迪家具有限公司是一家，注册资本为1万，所在地区位于四川成都市,我们以诚信、实力和质量获得业界的高度认可，坚持以客户为核心，“质量到位、服务一流”的经营理念为广大客户提供优质的服务。</div>
          <el-button type="primary">阅读更多</el-button>
        </div>
        <div class="pic">
          <img width="100%" src="../../common/images/pic5.jpg">
        </div>
        <div class="text sub-text">凯迪家具有限公司，是一家集设计、生产、安装、销售、服务于一体的大型实木家具生产厂家，生产基地位于山东省省会 - 济南。在实木家具生产领域拥有20余年的经验，能为客户提供整套个性化定制家具。</div>
        <div class="text sub-text">凯迪始终致力于实木家具的生产，产品采用“红橡木、乌金木、非洲胡桃木”等名贵木材精心打造，涵盖现代、美式、古典、中式等多种实木家具风格，可根据客户居室空间大小个性定制，充分利用每一寸空间。</div>
        <div class="text sub-text">公司拥有专业的研发队伍、全新的设计理念、精良的制作工艺、严格的检测工序、完善的销售网络和周到的售后服务，让凯迪的产品获得国内市场和客户的一致认可。</div>
        <div class="text sub-text">经过多年的磨砺与沉淀，凭借对实木家具行业前瞻的把握和对消费者需求的深刻洞察，凯迪不断开拓创新，吸纳行业精髓和业内高素质技术人才，全套引进国际先进设备、技术工艺，目前已经成为具有一定规模和竞争力的实木家具品牌。</div>
        <div class="text sub-text">凯迪奉承着“诚信稳健、以人为本、专业创新、精雕细琢”的企业文化，不断创新，为客户提供更实用更优异的实木家具产品，欢迎新老客户咨询洽谈！</div>
        <el-button type="primary">阅读更多</el-button>
      </div>
    </div>
    <div class="special">
      <h1 class="title">最新特点</h1>
      <div class="special-box">
        <h2 class="sub-title">21/02/2013</h2>
        <div class="text">实木家具的质地坚韧、耐磨抗划的特性非常的符合人们的需求，而且外观深沉大气，获得了人们的喜爱和认可。</div>
      </div>
      <div class="special-box">
        <h2 class="sub-title">11/03/2015</h2>
        <div class="text">在家具设计上，现代消费者不再停留在过去的一种风格，他们积极赋予生活空间新的含义，希望拥有一个与众不同的家居环境。泊雅家系列源于简约、自然的设计风格，充分地体现了淡泊、朴素、优雅、温馨的生活理念，风格圆润、简洁质朴，清新自然，使产品更加具有中式古朴、自然天成的韵味，从而更好地诠释家居文化精髓，营造淡泊优雅的生活。</div>
      </div>
      <div class="special-box">
        <h2 class="sub-title">15/07/2018</h2>
        <div class="text">雅典家系列全系产品贯穿时尚典雅、自然大气的“圆弧”型设计理念，线形圆润、简洁，以唯美气韵和深厚文化内涵，折射出高雅的贵族气质，展现了简欧实木家具的独特韵味。两大系列，不同风格，给予消费者不同的身心感受，更加符合大众的要求。</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    };
  },
  components: {

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.about
  padding-bottom 40px
  width 1024px
  margin 0 auto
  font-size 0
  .about-us, .special
    display inline-block
    vertical-align top
  .about-us
    width 60%
    /.title
      line-height 50px
      font-size $font-size-extra-large
      color #0085C2
    /.sub-title
      line-height 30px
      font-size $font-size-large
      color #53A3C7
    .desc
      font-size 0
      /.text
        line-height 25px
        font-size $font-size-medium
      .sub-text
        text-indent 2em
      .main, .pic
        display inline-block
        vertical-align top
      .main
        width 60%
      .pic
        width 40%
        padding 5px
        border-radius 5px
        background $white
        box-sizing border-box
  .special
    width 40%
    padding-left 30px
    box-sizing border-box
    .special-box
      margin-top 20px
@media screen and (max-width 600px)
  .about
    padding 0 10px
    width 100%
    box-sizing border-box
    .about-us, .special
      width 100%
    .about-us
      .desc
        .main, .pic
          width 100%
    .special
      padding-left 0
</style>
