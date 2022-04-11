export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/user',
    name: '用户管理',
    icon: 'user',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/user/list',
        name: '用户列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/permission',
        name: '权限管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/user/integral',
        name: '积分管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/user/certification',
        name: '认证管理',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/helper',
    name: '互帮管理',
    icon: 'coffee',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/helper/list',
        name: '互帮列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/helper/audit',
        name: '互帮审核',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/helper/type',
        name: '分类管理',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/order',
    name: '订单管理',
    icon: 'audit',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/order/list',
        name: '订单列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/order/need_solved',
        name: '待解决订单',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/session',
    name: '会话管理',
    icon: 'message',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/session/temporary',
        name: '临时会话',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/session/group',
        name: '群会话',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/group',
    name: '群管理',
    icon: 'team',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/group/list',
        name: '群列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/group/audit',
        name: '群审核',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/circle',
    name: '帮圈管理',
    icon: 'global',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/circle/list',
        name: '帮圈列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/circle/audit',
        name: '帮圈审核',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/circle/add',
        name: '添加帮圈',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/circle/banner',
        name: '热门帮圈',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/dynamic',
    name: '动态管理',
    icon: 'slack',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/dynamic/list',
        name: '动态列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/dynamic/commit',
        name: '评论管理',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/news',
    name: '文章资讯',
    icon: 'profile',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/news/list',
        name: '文章列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/news/add',
        name: '添加文章',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/news/banner',
        name: '广告位',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/app',
    name: 'APP管理',
    icon: 'android',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/app/list',
        name: '版本列表',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/app/send',
        name: '发布版本',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/app/download',
        name: 'APP下载',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/other',
    name: '其他',
    icon: 'menu',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/other/sms',
        name: '短信日志',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/feedback',
        name: '用户反馈',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/industry',
        name: '行业管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/school',
        name: '学校管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/city',
        name: '城市管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/picture',
        name: '图片管理',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/other/block-work',
        name: '屏蔽词',
        icon: 'smile',
        component: './Welcome',
      },
    ],
  },

  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
