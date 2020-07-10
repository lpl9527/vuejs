
export default {    //相当于组件异步methods，进行异步操作共享数据处理
  /*updateInfo(context, payload){
    setTimeout(() => {
      context.commit('updateInfoMu', payload.name.name)   //必须通过调用mutation方法进行修改
      //执行异步成功后回调
      payload.success();
    }, 1000)
  }*/
  //下面这种异步回调更好
  updateInfo(context, payload){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('updateInfoMu', payload)   //必须通过调用mutation方法进行修改

        //执行异步成功后回调，then()写在调用组件方
        resolve('回调数据')
      }, 1000)
    })

  }
}
