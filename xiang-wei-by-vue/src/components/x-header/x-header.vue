<template>
  <div class="x-header">
    <el-row>
      <el-col :span="10" class="logo">
        <img src="../../common/images/logo.png">
      </el-col>
      <el-col :span="14" class="nav">
        <ul class="nav-list">
          <router-link tag="li" to="/index" class="nav-list-item">首页</router-link>
          <router-link tag="li" to="/produce" class="nav-list-item">产品介绍</router-link>
          <router-link tag="li" to="/technical" class="nav-list-item">技术实力</router-link>
          <router-link tag="li" to="/news" class="nav-list-item">新闻动态</router-link>
          <router-link tag="li" to="/partners" class="nav-list-item">合作伙伴</router-link>
          <router-link tag="li" to="/about" class="nav-list-item">关于我们</router-link>
        </ul>
      </el-col>
    </el-row>
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

.x-header
  min-width 1450px
  height 80px
  background $color-info
  .logo
    padding 8px 0 0 200px
  .nav
    line-height 80px
    min-width 600px
    height 80px
    .nav-list
      font-size 0
      .nav-list-item
        display inline-block
        vertical-align top
        width 100px
        text-align center
        font-size $font-size-extra-large
        color $color-text-white
        cursor pointer
        &:hover
          background $color-text-hover

</style>
