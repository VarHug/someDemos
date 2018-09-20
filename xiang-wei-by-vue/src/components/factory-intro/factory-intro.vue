<template>
  <div class="factory-intro">
    <x-title :title="title" :subtitle="subtitle"></x-title>
    <ul class="factory-list">
      <li class="factory-list-item text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis esse possimus assumenda asperiores exercitationem dignissimos recusandae numquam! Cum, consequatur suscipit? Architecto consequuntur eius aliquid laudantium alias inventore molestiae excepturi harum.
      </li>
      <li class="factory-list-item" v-for="(item, index) in factoryImage" :key="index">
        <img width="100%" height="100%" :src="item.url">
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import xTitle from '../../components/x-title/x-title';

export default {
  data() {
    return {
      title: 'FACTORY-ENVIRONMENT',
      subtitle: '工厂规模',
      factoryImage: []
    };
  },
  created() {
    this._initImageArray();
  },
  methods: {
    _initImageArray() {
      this.factoryImage.push({
        url: require(`../../common/images/aboutus_1.jpg`),
        desc: 'this is a desc'
      });
      for (let i = 2; i <= 19; i++) {
        if (i === 12) {
          continue;
        }
        let obj = {};
        obj.url = require(`../../common/images/technical_${i}.jpg`);
        obj.desc = 'this is a desc';
        this.factoryImage.push(obj);
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

.factory-intro
  /.factory-list
    margin 0 auto
    width 1000px
    font-size 0
    .factory-list-item
      position relative
      display inline-block
      vertical-align top
      margin-top 10px
      padding 0 5px
      width 50%
      box-sizing border-box
      cursor pointer
      &.text
        height 490px
        font-size $font-size-large
        background $color-text-occupied
  @media (min-width: 1820px)
    .factory-list
      width 1600px
      .text
        height 790px
  @media (max-width: 1819px) and (min-width: 1440px)
    .factory-list
      width 1200px
      .text
        height 590px
</style>
