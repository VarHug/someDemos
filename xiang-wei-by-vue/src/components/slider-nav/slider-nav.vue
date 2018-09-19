<template>
  <div class="slider-nav">
    <el-carousel height="560px">
      <el-carousel-item v-for="(item, index) in image" :key="index" class="slider-nav-item">
        <img width="100%" height="100%" :src="item.url">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      image: [
        {
          url: require('../../common/images/nav01.jpg')
        },
        {
          url: require('../../common/images/nav02.jpg')
        },
        {
          url: require('../../common/images/nav03.jpg')
        },
        {
          url: require('../../common/images/nav04.jpg')
        }
      ]
    };
  },
  components: {

  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

.slider-nav-item
  cursor pointer

</style>
