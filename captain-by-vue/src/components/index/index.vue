<template>
  <div class="index">
    <div class="slider-wrapper" v-show="showFlag">
      <el-carousel class="slider" arrow="never" trigger="click" :interval="5000" height="500px">
        <el-carousel-item class="slider-item"><img width="100%" src="../../common/images/slider1.jpg"></el-carousel-item>
        <el-carousel-item class="slider-item"><img width="100%" src="../../common/images/slider2.jpg"></el-carousel-item>
        <el-carousel-item class="slider-item"><img width="100%" src="../../common/images/slider3.jpg"></el-carousel-item>
      </el-carousel>
    </div>
    <div class="content" v-show="showFlag">
      <div class="product">
        <div class="product-box" @click="showDeatil">
          <h1 class="title">经典美式</h1>
          <div class="pic">
            <img width="100%" height="100%" src="../../common/images/pic1.jpg">
            <i class="icon"><img src="../../common/images/plus_btn.png"></i>
          </div>
          <div class="desc">穿梭于写字楼，埋头于电脑前；每天重复着相似的工作；偶尔对未来有点迷茫，但别忘了生活还有梦想和花香。</div>
        </div>
        <div class="product-box">
          <h1 class="title">时尚欧式</h1>
          <div class="pic">
            <img width="100%" height="100%" src="../../common/images/pic2.jpg">
            <i class="icon"><img src="../../common/images/plus_btn.png"></i>
          </div>
          <div class="desc">穿梭于写字楼，埋头于电脑前；每天重复着相似的工作；偶尔对未来有点迷茫，但别忘了生活还有梦想和花香。</div>
        </div>
        <div class="product-box">
          <h1 class="title">白色简约</h1>
          <div class="pic">
            <img width="100%" height="100%" src="../../common/images/pic3.jpg">
            <i class="icon"><img src="../../common/images/plus_btn.png"></i>
          </div>
          <div class="desc">穿梭于写字楼，埋头于电脑前；每天重复着相似的工作；偶尔对未来有点迷茫，但别忘了生活还有梦想和花香。</div>
        </div>
      </div>
      <div class="reason">
        <div class="why">
          <h1 class="title">为什么选择我们</h1>
          <div class="pic">
            <img width="100%" src="../../common/images/pic4.jpg">
          </div>
          <div class="desc">我们的家不是一堆艺术品的堆砌，而是可以放松，充满愉悦的小世界；无论在外面如何的竞争和戒备，在家里你都可以唤醒内心的自由与美好的向往。</div>
          <el-button type="primary">更多</el-button>
        </div>
        <div class="show">
          <h1 class="title">顶级产品</h1>
          <percent-line class="pline" title="白色简约美式床" main="75.5" sub="+43"></percent-line>
          <percent-line class="pline" title="简约自然棉麻座椅" main="18" sub="-18"></percent-line>
          <percent-line class="pline" title="经济型版式衣橱" main="44.5" sub="33.7"></percent-line>
          <percent-line class="pline" title="简约实木床" main="10" sub="-39"></percent-line>
          <percent-line class="pline" title="天然大理石桌子" main="34" sub="-26"></percent-line>
        </div>
      </div>
    </div>
    <detail ref="detail"></detail>
  </div>
</template>

<script type="text/ecmascript-6">
import percentLine from '../percent-line/percent-line';
import detail from '../detail/detail';

export default {
  data() {
    return {
      showFlag: true
    };
  },
  methods: {
    showDeatil() {
      this.showFlag = false;
      this.$refs.detail.show();
    }
  },
  components: {
    percentLine,
    detail
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.index
  padding-bottom 40px
  .slider-wrapper
    background url('../../common/images/bg.png')
    padding 40px 0
    overflow hidden
    .slider
      margin 0 auto
      width 1024px
  .content
    margin 0 auto
    width 1024px
    .product
      margin 20px 0
      margin-right -3.3%
      font-size 0
      .product-box
        display inline-block
        vertical-align top
        margin-right 3.3%
        width 30%
        .title
          text-align center
          line-height 50px
          font-size $font-size-extra-large
          font-weight bold
          color $white
          background $blue-shallow
        .pic
          position relative
          .icon
            position absolute
            left 50%
            bottom -32px
            margin-left -32px
        .desc
          padding 40px 20px
          text-align center
          line-height 25px
          font-size $font-size-medium
          background $white
    .reason
      font-size 0
      .why, .show
        display inline-block
        vertical-align top
      .why
        width 35%
        margin-right 5%
        .title
          line-height 50px
          font-size $font-size-extra-large
          color $text
        .pic
          padding 5px
          border-radius 5px
          background $white
        .desc
          padding 20px 0
          line-height 25px
          font-size $font-size-small
      .show
        width 60%
        .title
          line-height 50px
          font-size $font-size-extra-large
          color $text
        .pline
          margin-top 25px

@media screen and (max-width 600px)
  .index
    .slider-wrapper
      padding 20px 10px
      height 220px
      .slider
        width 100%
    .content
      padding 0 10px
      width 100%
      box-sizing border-box
      .product
        margin-right 0
        .product-box
          width 100%
          margin-right 0
          &:nth-child(2)
            margin 10px 0
      .reason
        .why, .show
          width 100%
        .why
          margin-right 0
</style>
