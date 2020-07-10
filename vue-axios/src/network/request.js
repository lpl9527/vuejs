
//此文件主要是对第三方框架进行抽离、二次封装，便于后续切换
import axios from 'axios'   //引入第三方框架axios

//导出封装的一个request请求实例（可以定义多个不同配置的实例）
//1.第一种方式：

/*export function request(config, success, fail) {    //option参数中比传三个属性：config、success、fail。其中config为网络请求参数（对象类型），success为成功回调函数，fail为失败回调函数
  //1.创建asios的实例，不要直接使用全局axios，每个实例有自己单独的配置
  const instance = axios.create({
    //配置该实例全局配置
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.使用axios实例，发送网络请求
  instance(config)
    .then(res => {
      success(res)  //成功就回调（就相当于调用执行了传来的函数的逻辑，res为成功返回的结果数据）
    })
    .catch(err => {
      fail(err)
    })

}*/

//2.第二种方式：
/*export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      //配置该实例全局配置
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })

  })
}*/

//2.第三种方式：终极方案，axios本身就返回Promise(虽然代码简单了点，但是和axios的耦合增加了)
export function request(config) {
  const instance = axios.create({
    //1.创建、配置该实例全局配置
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.使用拦截器
  instance.interceptors.request.use(config => {   //拦截请求
    console.log(config)   //请求之前执行
    //执行一些逻辑...可以对请求做一些封装（加一些参数、token令牌等，网络请求成功之前页面上添加 ”加载图标“）
    return config     //最后要将参数返回
  }, err => {
    console.log(err)    //请求失败时执行
  })

  instance.interceptors.response.use(res => {   //拦截响应
    console.log(res)    //响应成功时执行
    //进行一系列处理之后...将响应结果进行返回
    return res
  }, err => {
    console.log(err)    //响应失败后执行
  })

  //发送网络请求
  return instance(config)

}

