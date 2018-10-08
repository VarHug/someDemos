<template>
  <div class="percent-line">
    <div class="main">
      <h1 class="title">{{title}}</h1>
      <div class="percent">
        <span class="main-percent text">{{main}}%</span>
        <span class="sub-percent text">{{sub}}%</span>
      </div>
    </div>
    <div class="line">
      <div class="inner-line" ref="innerLine"></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    main: {
      type: String,
      default: ''
    },
    sub: {
      type: String,
      default: ''
    }
  },
  methods: {
    _setInnerLine() {
      this.$refs.innerLine.style.width = `${this.main}%`;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._setInnerLine();
    });
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

.percent-line
  .main
    overflow hidden
    .title
      float left
      line-height 30px
      font-size $font-size-small
    .percent
      float right
      .text
        display inline-block
        margin-right 10px
      .main-percent
        font-size 30px
      .sub-percent
        font-size 20px
  .line
    margin-top 5px
    height 10px
    background $white
    .inner-line
      height 10px
      background $line
</style>
