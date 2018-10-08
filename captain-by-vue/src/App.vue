<template>
  <div id="app">
    <c-header></c-header>
    <div class="view">
      <router-view></router-view>
    </div>
    <c-footer></c-footer>
  </div>
</template>

<script>
import cHeader from './components/c-header/c-header';
import cFooter from './components/c-footer/c-footer';

export default {
  name: 'App',
  components: {
    cHeader,
    cFooter
  }
};

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~@/common/stylus/variable"

#app
  background $grey
  .view
    border-top 10px solid $border
    border-bottom 10px solid #D8D8D8

// @media screen and (max-width 600px)

</style>
