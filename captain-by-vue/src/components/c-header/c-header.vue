<template>
  <div class="c-header">
    <div class="c-header-content">
      <div class="logo">
        <img src="../../common/images/logo.png">
      </div>
      <ul class="nav">
        <router-link to="/index" tag="li" class="nav-item">首页</router-link>
        <router-link to="/about" tag="li" class="nav-item">关于</router-link>
        <router-link to="/server" tag="li" class="nav-item">服务</router-link>
        <router-link to="/contact" tag="li" class="nav-item">联系</router-link>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.c-header
  padding-top 20px
  position relative
  overflow hidden
  background $blue-dark
  .c-header-content
    width 1024px
    margin 0 auto
    overflow hidden
    .logo
      float left
      width 400px
      > img
        width 100%
        height 100%
    .nav
      float right
      .nav-item
        display inline-block
        margin-left 10px
        width 100px
        text-align center
        line-height 110px
        font-size $font-size-extra-large
        color $white
        background $blue-middle
        cursor pointer
        &.router-link-active
          background $blue-shallow

@media screen and (max-width 600px)
  .c-header
    padding 0 10px
    .c-header-content
      width 100%
      .logo
        float none
        width 100%
      .nav
        float none
        margin-top 10px
        .nav-item
          width 20%
          line-height 50px
</style>
