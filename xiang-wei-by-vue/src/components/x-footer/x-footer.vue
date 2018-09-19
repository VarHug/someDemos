<template>
  <div class="x-footer">
    <div class="address">
      <span class="text">长沙市暮云工业园湘潭市天易示范区</span>
      <span class="text">湘印集团版权所有 湘ICP备09020831号</span>
      <div class="tel">
        <i class="el-icon-phone-outline icon"></i>
        400-060-9881
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

.x-footer
  width 100%
  min-width 1050px
  padding 30px 0
  background $color-info
  font-size 0
  color $color-text-white
  .address
    position relative
    display inline-block
    width 100%
    font-size $font-size-large
    .text
      display block
      line-height 30px
      text-align center
    .tel
      position absolute
      top 5px
      left 65%
      .icon
        display inline-block
        vertical-align middle
        font-size 35px
</style>
