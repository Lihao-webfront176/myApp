<template>
  <div>
    <van-nav-bar title="用户登录" left-arrow @click-left="back" />
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

      <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
    </van-cell-group>
    <div class="btn-group">
      <van-button plain hairline type="primary" @click="getLogin">登录</van-button>
      <van-button plain hairline type="primary" @click="toRegister">去注册</van-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  props: [],
  data() {
    return {
      username: "",
      password: "",
      loginUrl: "http://localhost:8888/user/login"
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
    getLogin() {
      if (!this.password || !this.username) {
        Toast("用户名或密码不能为空，请重新输入");
        return;
      }
      this.$http.post(this.loginUrl, {
        username: this.username,
        password: this.password
      }).then(res => {
        if (!!res.data.token) {
          sessionStorage.setItem('myToken', res.data.token);
          this.$router.replace({
            name: 'userDetail'
          })
        }
      })
    },
    toRegister() {
      this.$router.replace({
        name: 'register'
      })
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
</style>
