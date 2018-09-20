<template>
  <div class="news">
    <div class="news-header">
      <img src="../../common/images/news_nav.jpg">
    </div>
    <div class="news-wrapper">
      <x-title :title="title" :subtitle="subtitle"></x-title>
      <div class="news-content">
        <li class="news-item" v-for="(item, index) in newsImage" :key="index">
          <div class="img-wrapper">
            <img width="100%" height="100%" :src="item.url">
          </div>
          <div class="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorum et debitis amet, expedita repudiandae optio culpa rem quos quis? Consectetur aliquid magni voluptas excepturi! Iure porro neque earum odit.
          </div>
        </li>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import xTitle from '../../components/x-title/x-title';

export default {
  data() {
    return {
      title: 'COMPANY NEWS',
      subtitle: '新闻动态',
      newsImage: []
    };
  },
  created() {
    this._initImageArray();
  },
  methods: {
    _initImageArray() {
      for (let i = 1; i <= 3; i++) {
        let obj = {};
        obj.url = require(`../../common/images/new_0${i}.jpg`);
        obj.desc = 'this is a desc';
        this.newsImage.push(obj);
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

.news
  .news-header
    width 100%
    overflow hidden
    font-size 0
  .news-wrapper
    padding 50px 100px
    .news-content
      margin 0 auto
      width 1000px
      .news-item
        font-size 0
        overflow hidden
        background $color-text-occupied
        margin-bottom 10px
        &:last-child
          margin-bottom 0
        .text
          font-size $font-size-large
          overflow hidden
        &:nth-child(n) .img-wrapper
          float right
        &:nth-child(2n) .img-wrapper
          float left
    @media (min-width: 1820px)
      .news-content
        width 1600px
    @media (max-width: 1819px) and (min-width: 1440px)
      .news-content
        width 1200px
</style>
