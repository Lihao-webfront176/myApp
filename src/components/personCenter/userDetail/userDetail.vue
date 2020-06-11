<template>
  <div>
    <van-nav-bar title="用户信息" left-arrow @click-left="back" />
    <div>
      <van-row type="flex" class="rowOne" justify="begin" align="center">
        <van-col span="5">
          <van-image width="60" round height="60" @click="previewImg" :src="userInfo.headImg" />
        </van-col>
        <van-col span="6">{{userInfo.username}}</van-col>
      </van-row>
      <van-row type="flex" class="rowItem" justify="space-between">
        <van-col span="6">地址</van-col>
        <van-col>{{userInfo.local}}</van-col>
      </van-row>
      <van-row type="flex" class="rowItem" justify="space-between">
        <van-col span="6">电话</van-col>
        <van-col>{{userInfo.phone}}</van-col>
      </van-row>
      <van-row type="flex" class="rowItem" justify="space-between">
        <van-col span="6">性别</van-col>
        <van-col>{{userInfo.sex}}</van-col>
      </van-row>
    </div>
    <van-divider />

    <!-- 图片预览 -->
    <van-image-preview v-model="previewShow" :images="images"></van-image-preview>
  </div>
</template>

<script>
import { Row, Col, Divider, Image } from "vant";
export default {
  props: [""],
  data() {
    return {
      userUrl: "http://localhost:8888/user/search",
      userInfo: {},
      previewShow: false,
      images: []
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.loadUser();
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
    loadUser() {
      this.$http.post(this.userUrl, {}).then(res => {
        if (res.data.retCode == "1") {
          this.userInfo = res.data.data;
          this.images = [this.userInfo.headImg];
        }
      });
    },
    previewImg() {
      this.previewShow = true;
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.rowOne {
  padding: 15px;
  font-size: 16px;
  color: #555764;
}
.rowItem {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  color: #555764;
  padding: 0 15px;
}
</style>