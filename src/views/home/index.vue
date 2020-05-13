<template>
  <div class="wrapper">
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </div>
</template>
<script>

import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['userName'])
  },

  methods: {
    // Action 通过 store.dispatch 方法触发
    doDispatch () {
      this.$store.dispatch('setUserName', '真乖，赶紧关注公众号，组织都在等你~');
    }
  }
};

</script>
<style lang="scss" scoped>
</style>
