<template>
  <div class="company-intro">
    <div class="introduction">
      <div class="img-wrapper">
        <img src="../../common/images/aboutus_1.jpg">
      </div>
      <div class="text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, sapiente labore alias, a neque eius rem enim quam cupiditate corrupti numquam perferendis optio placeat ad assumenda suscipit fugiat consectetur fuga?
      </div>
    </div>
    <div class="responsibility">
      <img src="../../common/images/aboutus_3.jpg">
      <div class="text">
        <h1 class="title">我们的责任</h1>
        <img src="../../common/images/text_img.png">
      </div>
    </div>
    <div class="culture">
      <div class="bg">
        <img width="100%" height="100%" src="../../common/images/comp_bg01.png">
      </div>
      <x-title :title="title1" :subtitle="subtitle1"></x-title>
      <div class="culture-img-wrapper">
        <img width="100%" height="100%" src="../../common/images/comp_bg03.png">
      </div>
    </div>
    <div class="history">
      <x-title :title="title2" :subtitle="subtitle2"></x-title>
      <div class="year year-top">
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="desc">今年这家公司成立了</div>
          <div class="text">2000</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="desc">今年这家公司成立了</div>
          <div class="text">2000</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="desc">今年这家公司成立了</div>
          <div class="text">2000</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="desc">今年这家公司成立了</div>
          <div class="text">2000</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="desc">今年这家公司成立了</div>
          <div class="text">2000</div>
        </div>
      </div>
      <div class="line">
        <div class="hollow-circle"></div>
        <div class="circle first-circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="hollow-circle"></div>
      </div>
      <div class="year year-bottom">
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="text">2000</div>
          <div class="desc">今年这家公司成立了</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="text">2000</div>
          <div class="desc">今年这家公司成立了</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="text">2000</div>
          <div class="desc">今年这家公司成立了</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
          <div class="text">2000</div>
          <div class="desc">今年这家公司成立了</div>
        </div>
        <div class="year-inner">
        </div>
        <div class="year-inner">
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import xTitle from '../../components/x-title/x-title';

export default {
  data() {
    return {
      title1: 'COMPANY INTRODUCTION',
      subtitle1: '企业文化',
      title2: 'DEVELOPMENT HISTORY',
      subtitle2: '钻石年鉴'
    };
  },
  components: {
    xTitle
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.company-intro
  width 100%
  .introduction, .responsibility
    margin 0 auto
    width 1000px
  .introduction
    overflow hidden
    .img-wrapper
      float right
      margin-left 10px
      img
        border-radius 50%
    .text
      overflow hidden
  .responsibility
    font-size 0
    overflow hidden
    > img
      float left
      margin-right 10px
    .text
      overflow hidden
      padding-top 10px
      .title
        font-size $font-size-extra-large
  .culture
    position relative
    margin-top 20px
    padding-top 9%
    .bg
      position absolute
      top 0
      left 0
      z-index -1
    .culture-img-wrapper
      padding 50px 0 50px 50%
      width 50%
      img
        margin-left -50%
  .history
    .year
      display flex
      margin 0 auto
      width 80%
      .year-inner
        flex 1
        .desc
          position relative
          padding 5px
          height 50px
          background $color-success
        .text
          text-align center
      &.year-top
        .desc, .text
          position relative
          left -50%
        .desc
          margin-bottom 25px
          &:after
            content ''
            display block
            position absolute
            bottom -20px
            left 50%
            margin-left -5px
            width 0
            height 0
            border-width 10px
            border-style solid
            border-color $color-success transparent transparent transparent
      &.year-bottom
        .desc, .text
          position relative
          left 50%
        .desc
          margin-top 25px
          &:after
            content ''
            display block
            position absolute
            top -20px
            left 50%
            margin-left -5px
            width 0
            height 0
            border-width 10px
            border-style solid
            border-color transparent transparent $color-success transparent
    .line
      display flex
      position relative
      margin 10px auto
      width 80%
      height 2px
      background $color-text-minor
      z-index -10
    .circle
      position relative
      flex 1
      &:after
        content ''
        display block
        position absolute
        top -5px
        width 10px
        height 10px
        background $color-success
        border-radius 50%
      &.first-circle
        &:after
          display none
    .hollow-circle
      flex 0 0 10px
      position absolute
      top -4px
      width 10px
      height 10px
      background $color-text-white
      border-radius 50%
      &::after
        content ''
        display block
        position absolute
        top 50%
        left 50%
        margin-top -10px
        margin-left -10px
        width 20px
        height 20px
        background $color-blue
        border-radius 50%
        z-index -1
      &:first-child
        left -14px
      &:last-child
        right -14px
</style>
