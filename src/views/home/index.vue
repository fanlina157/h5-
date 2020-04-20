<template>
  <div class="wrapper">
    <van-cell title="单元格" value="内容" />
    <van-cell title="单元格" value="内容" label="描述信息" />
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      a: 1
    };
  },
  components: {},
  watch: {},
  methods: {
    initData () { }
  },
  mounted () { },
  created () {
    if (this.a === 2) {
      console.log(1);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
