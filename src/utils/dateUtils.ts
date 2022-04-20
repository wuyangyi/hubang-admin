// 时间工具类
export default {
  differenceTime: 0,

  /**
   * 初始化时间差
   * @param time 服务器获取的时间
   */
  initTime(time: number) {
    if (time > 0) {
      this.differenceTime = new Date().valueOf() - time;
    }
  },

  /**
   * 获取当前时间戳
   * @returns 当前时间戳
   */
  getNowTime() {
    return new Date().valueOf() - this.differenceTime;
  },
};
