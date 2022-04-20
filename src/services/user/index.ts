import aesUtils from '@/utils/aesUtils';
import { request } from 'umi';

/**
 * 获取验证码
 */
export async function getCode(params: USERAPI.CodeLoginParams) {
  return request<BASEAPI.BaseBean<string>>('/api/v1/get_code', {
    method: 'POST',
    data: {
      phone: aesUtils.encrypt(params.phone),
      type: params.type,
    },
  });
}

/**
 * 登录
 */
export async function login(params: USERAPI.LoginParams) {
  if (params.type === 'account') {
    return request<BASEAPI.BaseBean<USERAPI.AuthBean>>('/api/admin/login', {
      method: 'POST',
      data: {
        phone: aesUtils.encrypt(params.phone),
        password: aesUtils.encrypt(params.password),
      },
    });
  } else {
    return request<BASEAPI.BaseBean<USERAPI.AuthBean>>('/api/admin/code_login', {
      method: 'POST',
      data: {
        phone: aesUtils.encrypt(params.phone),
        code: aesUtils.encrypt(params.code),
      },
    });
  }
}

/**
 * 自动登录
 */
export async function autoLogin() {
  return request<BASEAPI.BaseBean<USERAPI.AuthBean>>('/api/admin/auto_login', {
    method: 'POST',
  });
}

/**
 * 获取当前管理员信息
 */
export async function getUserInfo() {
  return request<BASEAPI.BaseBean<USERAPI.AuthBean>>('/api/admin/info', {
    method: 'GET',
  });
}

/**
 * 获取管理员列表
 * @param params
 * @returns
 */
export async function getAdminList(params: BASEAPI.PageParams) {
  return request<BASEAPI.PageListBean<USERAPI.AdminBean>>('/api/admin/list', {
    method: 'GET',
    params: params,
  });
}

/**
 * 添加管理员
 * @param params
 * @returns
 */
export async function addAdmin(params: USERAPI.AddAdminParams) {
  return request<BASEAPI.BaseBean<string>>('/api/admin/add', {
    method: 'POST',
    data: params,
  });
}

/**
 * 获取用户列表
 * @param params
 * @returns
 */
export async function getUserList(params: BASEAPI.PageParams, whereData: USERAPI.UserFilter) {
  console.log('数据', whereData);

  return request<BASEAPI.PageListBean<USERAPI.User>>('/api/admin/user/list', {
    method: 'GET',
    params: {
      ...params,
      ...whereData,
    },
  });
}
