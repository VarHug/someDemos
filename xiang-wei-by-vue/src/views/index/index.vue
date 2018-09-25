<template>
  <div>
    <slider-nav></slider-nav>
    <div class="product-introduction content-box">
      <h1 class="title">PRODUCT-INTRODUCTION</h1>
      <h1 class="title">产品介绍</h1>
      <div class="desc">自立拉链袋，中封袋，纸类复合袋，真空包装，异形包装，亚光局部亮光包装，镭射铝包装</div>
      <ul class="product-introduction-list">
        <li class="product-list-item" v-for="(item, index) in productImage" :key="index">
          <!-- <img width="100%" height="100%" :src="item.url"> -->
          <hug-card-flip :flipOpts="flipOpts">
            <img slot="front" width="100%" height="100%" :src="item.url">
            <div slot="back" class="item-desc">{{item.desc}}</div>
          </hug-card-flip>
        </li>
        <li class="product-list-item more">
          <img width="100%" height="100%" src="../../common/images/index_more.jpg">
        </li>
      </ul>
    </div>
    <div class="technical-strength content-box">
      <h1 class="title">TECHNICAL-STRENGTH</h1>
      <h1 class="title">技术实力</h1>
      <div class="technical-show">
        <img class="third" src="../../common/images/nav_img03.jpg">
        <img class="third" src="../../common/images/nav_img02.jpg">
        <img class="third" src="../../common/images/nav_img04.jpg">
        <img class="two" src="../../common/images/nav_img01.jpg">
        <img class="more" src="../../common/images/index_more.jpg">
      </div>
    </div>
    <div class="company-news content-box">
      <h1 class="title">COMPANY-NEWS</h1>
      <h1 class="title">新闻动态</h1>
      <div class="news-inner">
        <ul class="news-list">
          <li class="news-list-item">
            <div class="time">2015<br>02/13</div>
            <div class="news-content">
              <h2 class="news-title">祝贺湘印包装公司取得全国工业产品许可证</h2>
              <div class="text">示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字</div>
            </div>
          </li>
          <li class="news-list-item">
            <div class="time">2015<br>02/13</div>
            <div class="news-content">
              <h2 class="news-title">祝贺湘印包装公司取得全国工业产品许可证</h2>
              <div class="text">示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字</div>
            </div>
          </li>
          <li class="news-list-item">
            <div class="time">2015<br>02/13</div>
            <div class="news-content">
              <h2 class="news-title">祝贺湘印包装公司取得全国工业产品许可证</h2>
              <div class="text">示例文字示例文字示例文字示例文字示例文字示例文字示例文字示例文字</div>
            </div>
          </li>
        </ul>
        <div class="news-proimg">
          <img src="../../common/images/pro_img010.jpg">
        </div>
      </div>
    </div>
    <div class="cooperative-partner content-box">
      <h1 class="title">COOPERATIVE-PARTNER</h1>
      <h1 class="title">合作伙伴</h1>
      <div class="desc">同心 同力 共赢未来</div>
      <ul class="partner-list">
        <div class="partner-list-top">
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
        </div>
        <div class="partner-list-bottom">
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
          <li class="partner-list-item">
            <div class="list-item-name">伙伴名字</div>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import sliderNav from '../../components/slider-nav/slider-nav';
import hugCardFlip from '../../components/hug-card-flip/hug-card-flip';

export default {
  data() {
    return {
      productImage: [
        {
          url: require('../../common/images/pro_1.jpg'),
          desc: '高筋挂面'
        },
        {
          url: require('../../common/images/pro_2.jpg'),
          desc: '儿童鸡蛋挂面'
        },
        {
          url: require('../../common/images/pro_3.jpg'),
          desc: '华夏一面'
        },
        {
          url: require('../../common/images/pro_4.jpg'),
          desc: '陈克明挂面'
        },
        {
          url: require('../../common/images/pro_5.jpg'),
          desc: '排骨精'
        },
        {
          url: require('../../common/images/pro_6.jpg'),
          desc: '鸡精'
        },
        {
          url: require('../../common/images/pro_7.jpg'),
          desc: '纯香坊'
        }
      ],
      flipOpts: {
        speed: 1,
        axis: 'centerX'
      }
    };
  },
  components: {
    sliderNav,
    hugCardFlip
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"
@import "~@/common/stylus/mixin"

.content-box
  padding 50px 100px

.product-introduction
  /.title
    line-height 50px
    text-align center
    font-size $font-size-extra-large
    &:nth-child(1)
      position relative
      color $color-text-minor
      &:before
        content ''
        display block
        position absolute
        left 50%
        margin-left -100px
        width 200px
        height 2px
        background $color-text-hover
    &:nth-child(2)
      color $color-text
  .desc
    line-height 50px
    text-align center
    font-size $font-size-extra-large
    color $color-text-minor
  .product-introduction-list
    width 1000px
    margin 0 auto
    font-size 0
    .product-list-item
      position relative
      display inline-block
      vertical-align top
      margin-top 10px
      padding 0 5px
      width 250px
      height 157px
      box-sizing border-box
      .item-desc
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        font-size $font-size-large
        text-align center
  @media (min-width: 1820px)
    .product-introduction-list
      width 1600px
      .product-list-item
        width 400px
        height 247px
  @media (max-width: 1819px) and (min-width: 1440px)
    .product-introduction-list
      width 1200px
      .product-list-item
        width 300px
        height 189px
.technical-strength
  background url('../../common/images/inner_bg_01.jpg')
  background-size cover
  .title
    &:nth-child(1)
      color $color-text
  .technical-show
    margin 0 auto
    width 1000px
    font-size 0
    .third
      display inline-block
      vertical-align top
      padding 0 10px 10px 0
      width 33.3%
      box-sizing border-box
      &:last-child
        padding-right 0
    .two, .more
      display inline-block
      vertical-align bottom
      position relative
      top -67px
      padding 0 10px 10px 0
      box-sizing border-box
    .two
      width 66.6%
    .more
      width 33.3%
      cursor pointer
  @media (min-width: 1820px)
    .technical-show
      width 1600px
      .two, .more
        top -108px
  @media (max-width: 1819px) and (min-width: 1440px)
    .technical-show
      width 1200px
      .two, .more
        top -80px
.company-news
  .news-inner
    margin 0 auto
    padding 50px 0
    width 1000px
    font-size 0
    .news-list, .news-proimg
      display inline-block
      vertical-align top
    .news-list
      width 50%
      .news-list-item
        display flex
        margin-bottom 10px
        .time
          margin-right 10px
          padding-top 5px
          line-height 20px
          width 50px
          height 50px
          flex 0 0 50px
          font-size $font-size-large
          text-align center
          color $color-text-white
          background $color-blue
          box-sizing border-box
        /.news-content
          width 440px
          .news-title
            line-height 30px
            color $color-blue
            font-size $font-size-large
            no-wrap()
          .text
            color $color-text
            font-size $font-size-medium
            no-wrap()
    .news-proimg
      width 50%
      box-sizing border-box
      img
        float right
        cursor pointer
  @media (min-width: 1820px)
    .news-inner
      width 1600px
      .news-content
        width 740px
  @media (max-width: 1819px) and (min-width: 1440px)
    .news-inner
      width 1200px
      .news-content
        width 540px
.cooperative-partner
  background url('../../common/images/inner_bg1_02.jpg')
  background-size cover
  .title
    color $color-text
  .desc
    line-height 50px
    text-align center
    font-size $font-size-extra-large
    color $color-text
  .partner-list
    margin 0 auto
    width 1050px
    font-size 0
    .partner-list-bottom
      position relative
      top -103px
      left 104px
    .partner-list-item
      display inline-block
      vertical-align top
      margin 0 10px 10px 0
      width 196px
      height 196px
      box-sizing border-box
      background url('../../common/images/brand_all.png') no-repeat
      cursor pointer
      .list-item-name
        width 196px
        height 196px
        line-height 196px
        text-align center
        font-size $font-size-medium
        color $color-text-white
        background url('../../common/images/brand_all.png') no-repeat -196px -784px
        opacity 0
        transition all 1s
      &:hover
        .list-item-name
          opacity 1
    /.partner-list-top .partner-list-item
      &:nth-child(1)
        background-position 0 0
      &:nth-child(2)
        background-position 0 -196px
      &:nth-child(3)
        background-position 0 -392px
      &:nth-child(4)
        background-position 0 -588px
      &:nth-child(5)
        background-position 0 -784px
    /.partner-list-bottom .partner-list-item
      &:nth-child(1)
        background-position -196px 0
      &:nth-child(2)
        background-position -196px -196px
      &:nth-child(3)
        background-position -196px -392px
      &:nth-child(4)
        background-position -196px -588px

</style>
