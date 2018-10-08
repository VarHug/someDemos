<template>
  <div class="contact">
    <div class="address">
      <div class="map">
        <h1 class="title">地址</h1>
        <div class="pic"><img width="100%" src="../../common/images/ad.jpg"></div>
      </div>
      <div class="company">
        <h1 class="title">公司地址</h1>
        <ul class="ad-list">
          <li class="list-item">展厅地址：济南市天桥区富雅家居西区一楼</li>
          <li class="list-item">工厂地址：商河县郑路创新工业园</li>
          <li class="list-item">服务电话：0531-05860289</li>
          <li class="list-item">咨询热线：130-0057-5866</li>
          <li class="list-item">Email:<span class="email">info@mycompany.com</span></li>
          <li class="list-item">如果您对产品有任何疑问，或者对我们的服务有任何意见或建议，非常欢迎您直接与我们联络，我们将竭诚为您服务。</li>
        </ul>
      </div>
    </div>
    <div class="contact-us">
      <h1 class="title">联系我们</h1>
      <div class="contact-item">
        <label class="ltext" for="input-name">姓名</label>
        <el-input placeholder="请输入姓名" id="input-name"></el-input>
      </div>
      <div class="contact-item">
        <label class="ltext" for="input-email">E-mail</label>
        <el-input placeholder="请输入Email" id="input-email"></el-input>
      </div>
      <div class="contact-item">
        <label class="ltext" for="input-phone">电话</label>
        <el-input placeholder="请输入电话" id="input-phone"></el-input>
      </div>
      <el-button type="primary">提交</el-button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.contact
  margin 0 auto
  padding-bottom 40px
  width 1024px
  .address
    font-size 0
    .map, .company
      display inline-block
      vertical-align top
    .map
      width 55%
      margin-right 5%
      /.title
        line-height 50px
        font-size $font-size-extra-large
        color #0085C2
    .company
      width 40%
      .ad-list
        .list-item
          line-height 25px
          font-size $font-size-medium
          .email
            color $text
  .contact-us
    margin-top 20px
    .contact-item
      margin-bottom 10px
      .ltext
        display inline-block
        margin-bottom 5px
@media screen and (max-width 600px)
  .contact
    padding 0 10px
    width 100%
    box-sizing border-box
    .address
      .map
        margin-right 0
        width 100%
      .company
        width 100%
</style>
