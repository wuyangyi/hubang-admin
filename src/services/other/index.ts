import { request } from 'umi';

/**
 * 获取短信日志列表
 */
export async function getCodeList(params: OTHERAPI.CodePageParam) {
  return request<BASEAPI.PageListBean<OTHERAPI.PhoneCodeBean>>('/api/admin/other/code', {
    method: 'GET',
    params: params,
  });
}
