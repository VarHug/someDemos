<template>
  <div id="app">
    <x-header></x-header>
    <router-view></router-view>
    <x-footer></x-footer>
    <shortcut></shortcut>
  </div>
</template>

<script type="text/ecmascript-6">
import xHeader from './components/x-header/x-header';
import xFooter from './components/x-footer/x-footer';
import shortcut from './components/shortcut/shortcut';

export default {
  data() {
    return {

    };
  },
  components: {
    xHeader,
    xFooter,
    shortcut
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
