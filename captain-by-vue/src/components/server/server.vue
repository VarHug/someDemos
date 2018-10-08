<template>
  <div class="server">
    <h1 class="title">我们的服务</h1>
    <div class="text">凯迪家具坚持“以客户为关注焦点、倾听客户心声、保障商品质量、服务快捷到位”的服务宗旨，提高客户满意度，营造和谐温馨的服务体系，为此，公司组建了专业的服务团队，为消费者提供优质、高效、及时、专业的一站式服务，24小时内为您解答各类问题。</div>
    <div class="server-intro">
      <div class="server-box">
        <h2 class="sub-title">售前服务</h2>
        <div class="pic"><img width="100%" height="100%" src="../../common/images/ser_pic1.jpg"></div>
        <div class="desc">我们的工作人员将为您传递详尽的凯迪产品信息，并根据您各方面的情况与喜好进行综合分析，以此分析得出的结论为基础来推荐最适合您的实木家具产品。届时，我们专业的设计师，可根据您的住宅空间布局，为您制作初步的量身定制方案，且不用为此付出任何费用。</div>
        <el-button type="primary">阅读更多</el-button>
      </div>
      <div class="server-box">
        <h2 class="sub-title">售中服务</h2>
        <div class="pic"><img width="100%" height="100%" src="../../common/images/ser_pic2.jpg"></div>
        <div class="desc">凯迪售中服务，主要体现在您签订销售订单并预付订金之后的环节，为您免费制作整体量身定制设计方案，在这过程中设计师会以专业的角度与您进行实时的方案沟通，并根据您所提出的要求进行探讨,最终形成令您满意的最佳设计方案，帮您实现生活的期望。</div>
        <el-button type="primary">阅读更多</el-button>
      </div>
      <div class="server-box">
        <h2 class="sub-title">售后服务</h2>
        <div class="pic"><img width="100%" height="100%" src="../../common/images/ser_pic3.jpg"></div>
        <div class="desc">凯迪所有产品均附加有产品售后服务，自购买之日起计算，三年内，如产品在正常使用情况下产生质量问题，您可享受免费维修服务承诺；三年质保期外，凯迪提供有偿维护服务，仅收取成本费。保证您的消费权益与家居良好性能。</div>
        <el-button type="primary">阅读更多</el-button>
      </div>
      <div class="server-box">
        <h2 class="sub-title">特殊服务</h2>
        <div class="pic"><img width="100%" height="100%" src="../../common/images/ser_pic4.jpg"></div>
        <div class="desc">针对有需要的顾客，凯迪可在订单下到车间生产之前，根据您选定的材质与花色，提供样板试制服务。此项服务结合设计方案图，可以使您在产品还未安装之前，就能在脑海中想象出产品安装完成之后的场景效果，为您解决后顾之忧!</div>
        <el-button type="primary">阅读更多</el-button>
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

.server
  margin 0 auto
  padding-bottom 40px
  width 1024px
  .title
    line-height 50px
    font-size $font-size-extra-large
    color #0085C2
  .text
    line-height 25px
    font-size $font-size-medium
    margin-bottom 10px
  .server-intro
    font-size 0
    margin-right -2%
    .server-box
      display inline-block
      vertical-align top
      margin-right 2%
      width 23%
      .sub-title
        line-height 30px
        font-size $font-size-large
        color #53A3C7
      .pic
        margin 10px 0
        padding 20px
        border-radius 5px
        background $white
      .desc
        margin-bottom 10px
        line-height 25px
        font-size $font-size-medium
        color #6F7F9E
@media screen and (max-width 600px)
  .server
    padding 0 10px
    width 100%
    box-sizing border-box
    .server-intro
      margin-right 0
      .server-box
        width 100%
</style>
