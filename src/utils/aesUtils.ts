import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('s379e8b551be4ed0');
const iv = CryptoJS.enc.Utf8.parse('2002038505065588');

export default {
  /**
   * aes 加密
   * @param message 待加密的数据
   * @returns 加密后的数据
   */
  encrypt(message: string) {
    const srcs = CryptoJS.enc.Utf8.parse(message);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  },

  /**
   * aes 解密
   * @param word 待解密的数据
   * @returns 解密后的数据
   */
  decrypt(word: string) {
    const decryptedStr = CryptoJS.AES.decrypt(word, key, {
      iv: iv,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    const dStr = decryptedStr.toString(CryptoJS.enc.Utf8);
    return dStr.toString();
  },
};
