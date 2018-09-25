<template>
  <div class="shortcut">
    <div class="item focus">
      <span class="shortcust-text">关注我们</span>
      <div class="shortcut-inner">
        <div class="shortcut-box">
          <h1 class="title">二维码</h1>
          <div class="img-wrapper">
            <img width="100%" height="100%" src="../../common/images/erweima.jpg">
          </div>
        </div>
        <div class="shortcut-box">
          <h1 class="title">二维码</h1>
          <div class="img-wrapper">
            <img width="100%" height="100%" src="../../common/images/erweima.jpg">
          </div>
        </div>
      </div>
    </div>
    <div class="item conact">
      <span class="shortcust-text">联系我们</span>
    </div>
    <transition name="fade">
      <div class="item gotop" v-show="scrollY > 100">
        <span class="shortcust-text" @click="gotop">回到顶部</span>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      scrollY: 0
    };
  },
  methods: {
    gotop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    _handleScroll() {
      this.scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this._handleScroll);
  },
  components: {

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.shortcut
  position fixed
  right 21px
  bottom 60px
  height 237px
  z-index 1000
  .item
    position relative
    display block
    width 60px
    height 60px
    text-align center
    cursor pointer
    background url('../../common/images/shortcut.png') no-repeat
    &:hover
      .shortcust-text
        visibility visible
      .shortcut-inner
        display block
    &:hover
      &.focus
        .shortcust-text
          background #3dbfb6
    &:hover
      &.conact
        .shortcust-text
          background #7d77a8
    &:hover
      &.gotop
        .shortcust-text
          background #bebebe
    .shortcust-text
      display block
      padding 7px 10px
      line-height 23px
      cursor pointer
      font-size $font-size-small
      color $color-text-white
      visibility hidden
    .shortcut-inner
      display none
      position absolute
      top 0
      left -180px
      background #fff
      font-size 0
      .shortcut-box
        display inline-block
        padding 10px
        width 50%
        box-sizing border-box
        .title
          font-size 14px
          line-height 20px
        .img-wrapper
          width 60px
          height 60px
      &::after
        content ''
        display block
        position absolute
        top 10px
        right -10px
        width 0
        height 0
        border-width 5px
        border-style solid
        border-color transparent transparent transparent #fff
  .focus
    background-position 0 -59px
  .conact
    background-position 0 -177px
  .gotop
    background-position 0 -236px
    &.fade-enter-active, &.fade-leave-active
      transition: opacity 1s
    &.fade-enter, &.fade-leave-to
      opacity: 0

</style>
