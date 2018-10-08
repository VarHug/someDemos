<template>
  <div class="c-footer">
    <div class="c-footer-content">
      <div class="text">COPYRIGHT @2016.COMPANY NAME ALL RIGHTS RESERVED.MORE TEMPLATES.COLLECT FROM</div>
      <ul class="app">
        <li class="app-item">SKYPE</li>
        <li class="app-item">LINKED IN</li>
        <li class="app-item">TWITTER</li>
        <li class="app-item">FACEBOOK</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.c-footer
  line-height 50px
  color #417474
  background  #001221
  .c-footer-content
    width 1024px
    margin 0 auto
    overflow hidden
    .text
      float left
      font-size $font-size-small
    .app
      float right
      font-size 0
      .app-item
        display inline-block
        vertical-align top
        margin-right 5px
        font-size $font-size-small
@media screen and (max-width 600px)
  .c-footer
    padding 0 10px
    .c-footer-content
      text-align center
      line-height 20px
      width 100%
      .text
        float none
        width 100%
      .app
        float none
        margin-top 10px
</style>
