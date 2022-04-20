import Cookies from 'js-cookie';

const tokenKey = 'hubang_admin_token'; // token存储key值

// cookie工具类
const cookieUils = {
  /**
   * 保存cookie
   * @param key 存储key值
   * @param value 存储的值
   * @param options
   */
  setCookie(key: string, value: any, options?: Cookies.CookieAttributes) {
    Cookies.set(key, value, options);
  },

  /**
   * 获取存储的值
   * @param key 存储的key值
   * @returns 返回值
   */
  getCookie(key: string) {
    return Cookies.get(key);
  },

  /**
   * 获取存储的token
   * @returns 返回token值
   */
  getToken(): string | undefined {
    return Cookies.get(tokenKey);
  },

  /**
   * 保存token
   * @param value 需要保存的token值
   */
  setToken(value: string) {
    this.setCookie(tokenKey, value, {
      expires: 30,
    });
  },

  /**
   * 移除保存的token
   */
  removeToken() {
    Cookies.remove(tokenKey);
  },
};

export default cookieUils;
