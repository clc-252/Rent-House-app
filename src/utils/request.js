/* 
    封装axios
    1.提取接口的公共路径 => 基准地址：方便后期的修改
    2.利用axios的拦截器功能
     - 在发送请求前进行相关处理
     - 在请求成功后进行相关处理
*/

// 引入
import axios from 'axios'
// 引入Toast轻提示
import {
  Toast
} from 'antd-mobile';

export const baseURL = 'http://157.122.54.189:9060';
axios.defaults.baseURL = baseURL;

// 定义一个变量记录发送请求的次数
let AjaxTimes = 0;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 每发送前一个请求，AjaxTimes+1
  AjaxTimes++
  // 提示加载中
  Toast.loading('加载中...', 0);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  // 请求回来AjaxTimes—1
  AjaxTimes--
  // 当最后一个回来的时候
  if (AjaxTimes === 0) {
    // 加载中提示隐藏
    Toast.hide()
  }

  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// 暴露
export default axios;