class dt {
  constructor() {}
  /**
   * trim 字符串去除空格
   * @param str {String} 需要处理的字符串
   * @param type {Boolean} 是否去除所有空格
   */
  trim(str: string, type: boolean): string {
    return type ? str.replace(/\s+/g, "") : str.replace(/^\s+|\s+$/g, "");
  }

  /**
   * uuid 随机生成uuid
   */
  uuid(): string {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
  }
  /**
   * 获取本机ip
   */
  getIp(): string {
    const os=require("os");
    let needHost = ""; // 打开的host
    try {
      // 获得网络接口列表
      let network = os.networkInterfaces();
      for (let dev in network) {
        let iface = network[dev];
        for (let i = 0; i < iface.length; i++) {
          let alias = iface[i];
          if (
            alias.family === "IPv4" &&
            alias.address !== "127.0.0.1" &&
            !alias.internal
          ) {
            needHost = alias.address;
          }
        }
      }
    } catch (e) {
      needHost = "localhost";
    }
    return needHost;
  }
}

export default new dt();
