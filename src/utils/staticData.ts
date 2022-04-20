export default {
  pageLimit: 20, // 默认页面条数
  userDefaultImage: 'http://wyyhubang.oss-cn-chengdu.aliyuncs.com/default/default_user.png',
  adminRoleData: { 1: '超级管理员', 2: '管理员' },
  clientLable: [
    { lable: 'android', value: 'android' },
    { lable: 'ios', value: 'ios' },
    { lable: 'miniapp', value: 'miniapp' },
    { lable: 'pc', value: 'pc' },
  ],
  userAccountTypeData: { 0: '普通', 1: '禁用' }, // 用户账号类型选择data
  userAccountTypeLable: [
    { lable: '普通', value: 0 },
    { lable: '禁用', value: 1 },
  ], // 用户账号类型选择lable
};
