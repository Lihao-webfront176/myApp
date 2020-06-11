import axios from 'axios'
import {
  Toast
} from 'vant';

var axiosNew = axios.create({});
axiosNew.defaults.withCredentials = false;
axiosNew.interceptors.request.use(function (config) {
  config.timeout = 30000;
  // 若是有做鉴权token , 就给头部带上token
  let token = sessionStorage.getItem("myToken")
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  } else {
    config.headers.Authorization = "";
  }
  return config;
}, function (error) {
  // 当请求异常时做一些处理
  return Promise.reject(error);
});
//响应拦截器即异常处理
axiosNew.interceptors.response.use(response => {
  return response
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '错误请求'
        break;
      case 401:
        window.sessionStorage.removeItem("myToken");
        window.location.href = 'http://localhost:8080/login'
        break;
      case 403:
        err.message = '拒绝访问'
        break;
      case 404:
        err.message = '请求错误,未找到该资源'
        break;
      case 405:
        err.message = '请求方法未允许'
        break;
      case 408:
        err.message = '请求超时'
        break;
      case 500:
        err.message = '服务器端出错'
        break;
      case 501:
        err.message = '网络未实现'
        break;
      case 502:
        err.message = '网络错误'
        break;
      case 503:
        err.message = '服务不可用'
        break;
      case 504:
        err.message = '网络超时'
        break;
      case 505:
        err.message = 'http版本不支持该请求'
        break;
      default:
        err.message = `连接错误${err.response.status}`
    }
  } else {
    err.message = "连接到服务器失败"
  }
  if (err.response.status != 401) {
    Toast(err.message);
  }
  return Promise.resolve(err.response)
})

export default {
  name: "httpUtil",
  //get请求
  get(url, param) {
    return new Promise((resolve, reject) => {
      axiosNew({
        method: 'get',
        url,
        params: param,
        headers: {
          "Content-Type": "application/json"
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  fileUpload(url, param) {
    return new Promise((resolve, reject) => {
      axiosNew({
        method: 'post',
        url,
        data: param,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        resolve(res)
      })
    })
  },
  //post请求
  post(url, param) {
    return new Promise((resolve, reject) => {
      axiosNew({
        method: 'post',
        url,
        data: param,
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        if (res.data.retCode == 1) {
          resolve(res)
        } else {
          //  MessageBox.alert(res.data.retMessage);
        }
        resolve(res)
      })
    })
  }
}
