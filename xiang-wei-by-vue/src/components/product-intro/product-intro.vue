<template>
  <div class="product-intro">
    <x-title :title="title" :subtitle="subtitle" :desc="desc"></x-title>
    <div class="show-content">
      <el-carousel class="stage"
                  indicator-position="none"
                  arrow="always"
                  @change="carouselChange"
                  ref="carousel">
        <el-carousel-item v-for="(item, index) in productImage" :key="index">
          <div class="img-wrapper">
            <img width="100%" height="100%" :src="item.url">
          </div>
          <div class="desc">这是一个产品介绍信息</div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product">
      <div class="title">
        <div class="line"></div>
        <div class="text">所有产品</div>
        <div class="line"></div>
      </div>
      <ul class="product-list">
        <li class="product-list-item" :class="{'current': index === currentIndex}" v-for="(item, index) in productImage" :key="index">
          <img width="100%" height="100%" :src="item.url" @click="selectProduct(index)">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import xTitle from '../../components/x-title/x-title';

export default {
  data() {
    return {
      title: 'PRODUCT INTRODUCTION',
      subtitle: '产品展示',
      desc: '用我们的激情、智慧和汗水，把企业打造成中国塑料彩印行业的标志性企业，为全社会提供更安全、更环保、更精致的塑料彩印包装',
      productImage: [],
      currentIndex: 1
    };
  },
  created() {
    this._initImageArray();
  },
  methods: {
    carouselChange(index) {
      this.currentIndex = index;
    },
    selectProduct(index) {
      this.$refs.carousel.setActiveItem(index);
    },
    _initImageArray() {
      for (let i = 1; i <= 70; i++) {
        let obj = {};
        obj.url = require(`../../common/images/pro_${i}.jpg`);
        obj.desc = 'this is a desc';
        this.productImage.push(obj);
      }
    }
  },
  components: {
    xTitle
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.product-intro
  .show-content
    position relative
    margin 0 auto
    width 1000px
    .icon
      position absolute
      top 50%
      margin-top -25px
      width 50px
      height 50px
      font-size 55px
      color $color-text-minor
      cursor pointer
      &.el-icon-arrow-left
        left 0
      &.el-icon-arrow-right
        right 0
    /.stage
      margin 0 auto
      width 90%
      /.img-wrapper
        float left
        margin-right 50px
        width 450px
        height 300px
        &::after
          content ''
          display block
          position absolute
          top 50%
          left 480px
          margin-top -10px
          width 0
          height 0
          border-width 10px
          border-style solid
          border-color transparent $color-text-hover transparent transparent
      .desc
        position relative
        height 300px
        font-size $font-size-extra-large
        color $color-text-white
        background $color-text-hover
        overflow hidden
  @media (min-width: 1820px)
    .show-content
      width 1600px
  @media (max-width: 1819px) and (min-width: 1440px)
    .show-content
      width 1200px
  .product
    .title
      display flex
      margin 0 auto
      width 1000px
      .line
        flex 1
        position relative
        top -14px
        border-bottom 1px solid $color-text-minor
      .text
        padding 0 12px
        line-height 30px
        font-size $font-size-large
        color $color-text-minor
    .product-list
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
        cursor pointer
        &.current > img
          border 2px solid $color-text-hover
    @media (min-width: 1820px)
      .title
        width 1600px
      .product-list
        width 1600px
        .product-list-item
          width 400px
          height 247px
    @media (max-width: 1819px) and (min-width: 1440px)
      .title
        width 1200px
      .product-list
        width 1200px
        .product-list-item
          width 300px
          height 189px

</style>
