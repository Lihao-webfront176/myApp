<template>
  <div>
    <input type="text" />
    <input type="text" v-focus />
    <div v-click="clickValue" @click="showToast">哈哈哈哈哈哈哈哈</div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props: [""],
  data() {
    return {
			clickValue: "iAmClick"
		};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
		showToast() {
			Toast('我被点击了！！--这是一次提交测试')
		}
	},

  watch: {},
};
</script>
<style lang='' scoped>
</style>