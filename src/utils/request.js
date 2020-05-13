import axios from 'axios';
import store from '@/store';
import { Toast } from 'vant';
const service = axios.create({
  // baseURL: '', // url = base api url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
});

// request拦截器 request interceptor
service.interceptors.request.use(
  config => {
    // 不传递默认开启loading
    if (!config.hideloading) {
      Toast.loading({
        forbidClick: true
      });
    }
    if (store.getters.token) {
      config.headers['X-Token'] = '';
    }
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  response => {
    Toast.clear();
    const res = response.data;
    if (res.status && res.status !== 200) {
      // 登录超时,重新登录
      if (res.status === 401) {
        store.dispatch('FedLogOut').then(() => {
          location.reload();
        });
      }
      return Promise.reject(res || 'error');
    } else {
      return Promise.resolve(res);
    }
  },
  error => {
    Toast.clear();
    console.log('err' + error);
    return Promise.reject(error);
  }
);

export default service;
