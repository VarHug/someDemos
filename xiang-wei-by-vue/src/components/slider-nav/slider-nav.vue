<template>
  <div class="slider-nav">
    <el-carousel height="560px">
      <el-carousel-item v-for="(item, index) in image" :key="index" class="slider-nav-item">
        <img width="100%" height="100%" :src="item.url">
      </el-carousel-item>
      <el-carousel-item class="starry">
        <div class="stage">
          <div class="meteor meteor001"></div>
          <div class="meteor meteor002"></div>
          <div class="meteor meteor003"></div>
          <div class="meteor meteor004"></div>
          <div class="meteor meteor005"></div>
          <div class="meteor meteor006"></div>
          <div class="meteor meteor007"></div>
          <div class="meteor meteor008"></div>
          <div class="meteor meteor009"></div>
        </div>
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
.starry
  background url('../../common/images/nav02.jpg')
  /.stage
    position relative
    margin 0 auto
    width 1000px
    height 100%
    /.meteor
      position absolute
      z-index 1000
      background url('../../common/images/nav2_all.png') no-repeat
    /.meteor001
      top 290px
      right 290px
      width 190px
      height 183px
      background-position 0 0
      animation myfirst1 1.5s linear infinite
    /.meteor002
      top 170px
      right 400px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst2 2.2s linear infinite
    /.meteor003
      top 160px
      right 800px
      width 190px
      height 183px
      background-position 0 -263px
      animation myfirst3 1.8s linear infinite
    /.meteor004
      top 120px
      right 300px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst4 2.4s linear infinite
    /.meteor005
      top 20px
      right 10px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst5 2s linear infinite
    /.meteor006
      top 0
      right 400px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst6 1.8s linear infinite
    /.meteor007
      top 470px
      right 500px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst7 1.5s linear infinite
    /.meteor008
      top 470px
      right 500px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst8 1.5s linear infinite
    /.meteor009
      top 470px
      right 500px
      width 89px
      height 80px
      background-position 0 -183px
      animation myfirst9 2.5s linear infinite

@keyframes myfirst1 {
  from {
    top -20px
    right 0
  }
  to {
    top 513px
    right 500px
  }
}
@keyframes myfirst2 {
  from {
    top -40px
    right 400px
  }
  to {
    top 513px
    right 1000px
  }
}
@keyframes myfirst3 {
  from {
    top -40px
    right 300px
  }
  to {
    top 513px
    right 900px
  }
}
@keyframes myfirst4 {
  from {
    top -100px
    right 500px
  }
  to {
    top 513px
    right 1100px
  }
}
@keyframes myfirst5 {
  from {
    top -300px
    right -300px
  }
  to {
    top 513px
    right 400px
  }
}
@keyframes myfirst6 {
  from {
    top -300px
    right 700px
  }
  to {
    top 513px
    right 1300px
  }
}
@keyframes myfirst7 {
  from {
    top -30px
    right 50px
  }
  to {
    top 513px
    right 700px
  }
}
@keyframes myfirst8 {
  from {
    top -30px
    right -400px
  }
  to {
    top 513px
    right 100px
  }
}
@keyframes myfirst9 {
  from {
    top -30px
    right -200px
  }
  to {
    top 513px
    right 200px
  }
}

</style>
