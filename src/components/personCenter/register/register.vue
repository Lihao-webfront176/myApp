<template>
  <div>
    <van-nav-bar title="用户注册" left-arrow @click-left="back" />
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('你有啥不懂的？不懂也别问我，问我我就打你！')"
      />

      <van-field v-model="phone" type="text" label="手机号" placeholder="请输入手机号" required />
      <van-field v-model="local" label="地址" placeholder="请输入地址" required />
      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      <van-field
        v-model="passwordSure"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        required
      />
    </van-cell-group>
    <van-radio-group v-model="sexRadio" class="radioGroup">
      <van-radio name="1" checked-color="#07c160" class="radioItem">男</van-radio>
      <van-radio name="2" checked-color="#07c160">女</van-radio>
    </van-radio-group>
    <div class="headImg">
      头像
      <van-uploader
        v-model="fileList"
        :result-type="'dataUrl'"
        :after-read="afterRead"
        multiple
        :max-count="1"
      />
    </div>
    <div class="btn-group">
      <van-button plain hairline type="primary" @click="registerPost">注册</van-button>
      <van-button plain hairline type="primary" @click="toLogin">去登录</van-button>
    </div>
  </div>
</template>

<script>
import { Uploader, Toast } from "vant";
export default {
  props: [],
  data() {
    return {
      username: "",
      password: "",
      passwordSure: "",
      phone: "",
      local: "",
      registerUrl: "http://localhost:8888/user/register",
      headImgUrl: "http://localhost:8888/user/uploadImg",
      submitLoad: false,
      fileList: [],
      headImg: "",
      sexRadio: "1"
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    back() {
      this.$router.go(-1);
    },
    registerPost() {
      if (this.password != this.passwordSure) {
        Toast("两次密码不一致，请重新输入");
        return;
      }
      if (
        !this.username ||
        !this.password ||
        !this.local ||
        !this.phone ||
        !this.headImg
      ) {
        Toast("请检查注册信息");
        return;
      }
      this.$http
        .post(this.registerUrl, {
          username: this.username,
          password: this.password,
          phone: this.phone,
          local: this.local,
          sex: this.sexRadio == "1" ? "男" : "女",
          headImg: this.headImg
        })
        .then(res => {
          if (res.data.retCode == "1") {
            sessionStorage.setItem("myToken", res.data.token);
            this.$router.replace({
              name: "userDetail"
            });
          } else {
            Toast(res.data.retMessage);
          }
        });
    },
    toLogin() {
      this.$router.push({
        name: "login"
      });
    },
    afterRead(file) {
      console.log(file);
      let parmars = new FormData();
      parmars.append("file", file.file);
      let config = {
        headers: {
          //添加请求头
          "Content-Type": "multipart/form-data"
        }
      };
      this.$http.post(this.headImgUrl, parmars, config).then(res => {
        Toast(res.data.retMessage);
        if (res.data.retCode == "1") {
          this.headImg = res.data.headImg;
        }
      });
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.btn-group {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  button {
    height: 30px;
    line-height: 30px;
  }
}
.headImg {
  color: #555764;
  font-size: 14px;
  padding-left: 15px;
  margin-top: 15px;
}
.radioGroup {
  padding: 10px 16px 0;
  font-size: 14px;
}
.radioItem {
  margin-bottom: 10px;
}
</style>
