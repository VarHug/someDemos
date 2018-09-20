<template>
  <div class="parthners">
    <h1 class="title">合作伙伴</h1>
    <div class="text">这些品牌都选择与我们合作</div>
    <div class="text">我们用技术和激情为客户创造价值、共享成果</div>
    <ul class="parthner-list">
      <li class="parthner-list-item" v-for="(item, index) in parthnerImage" :key="index">
        <img width="100%" height="100%" :src="item.url">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      parthnerImage: []
    };
  },
  created() {
    this._initImageArray();
  },
  methods: {
    _initImageArray() {
      for (let i = 1; i <= 20; i++) {
        let obj = {};
        if (i < 10) {
          obj.url = require(`../../common/images/partners_0${i}.jpg`);
        } else {
          obj.url = require(`../../common/images/partners_${i}.jpg`);
        }
        obj.desc = 'this is a desc';
        this.parthnerImage.push(obj);
      }
    }
  },
  components: {

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.parthners
  padding 50px 100px
  background url('../../common/images/partners_bg.jpg') no-repeat
  background-size cover
  .title
    font-size $font-size-extra-large
  .title, .text
    text-align center
    color $color-text-white
    line-height 25px
  .parthner-list
    margin 20px auto 0
    width 1000px
    font-size 0
    .parthner-list-item
      position relative
      display inline-block
      vertical-align top
      padding 10px
      width 200px
      box-sizing border-box
  @media (min-width: 1820px)
    .parthner-list
      width 1600px
      .parthner-list-item
        width 320px
  @media (max-width: 1819px) and (min-width: 1440px)
    .parthner-list
      width 1200px
      .parthner-list-item
        width 240px

</style>
