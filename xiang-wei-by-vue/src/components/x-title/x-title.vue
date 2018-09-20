<template>
  <div class="x-title">
    <h1 class="title">{{title}}</h1>
    <h1 class="title">{{subtitle}}</h1>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    }
  },
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

.title
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
</style>
