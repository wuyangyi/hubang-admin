export default [
  {
    path: '/account',
    layout: false,
    routes: [
      {
        path: '/account',
        routes: [
          {
            name: 'login',
            path: '/account/login',
            component: './account/Login',
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
    path: '/admin',
    name: 'admin',
    icon: 'aliwangwang',
    access: 'premission',
    routes: [
      {
        path: '/admin/list',
        name: 'list',
        component: './account/list/AdminList',
      },
      {
        path: '/admin/add',
        name: 'add',
        component: './account/add/AddAdmin',
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    icon: 'user',
    access: 'premission',
    routes: [
      {
        path: '/user/list',
        name: 'list',
        component: './user/list/UserList',
      },
      {
        path: '/user/integral',
        name: 'integral',
        component: './Welcome',
      },
      {
        path: '/user/certification',
        name: 'certification',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/helper',
    name: 'helper',
    icon: 'coffee',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/helper/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/helper/audit',
        name: 'audit',
        component: './Welcome',
      },
      {
        path: '/helper/type',
        name: 'type',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/order',
    name: 'order',
    icon: 'audit',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/order/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/order/need_solved',
        name: 'need_solved',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/session',
    name: 'session',
    icon: 'message',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/session/temporary',
        name: 'temporary',
        component: './Welcome',
      },
      {
        path: '/session/group',
        name: 'group',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/group',
    name: 'group',
    icon: 'team',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/group/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/group/audit',
        name: 'audit',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/circle',
    name: 'circle',
    icon: 'global',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/circle/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/circle/audit',
        name: 'audit',
        component: './Welcome',
      },
      {
        path: '/circle/add',
        name: 'add',
        component: './Welcome',
      },
      {
        path: '/circle/hot',
        name: 'hot',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    icon: 'slack',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/dynamic/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/dynamic/commit',
        name: 'commit',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/news',
    name: 'news',
    icon: 'profile',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/news/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/news/add',
        name: 'add',
        component: './Welcome',
      },
      {
        path: '/news/banner',
        name: 'banner',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/app',
    name: 'app',
    icon: 'android',
    access: 'premission',
    component: './Admin',
    routes: [
      {
        path: '/app/list',
        name: 'list',
        component: './Welcome',
      },
      {
        path: '/app/send',
        name: 'send',
        component: './Welcome',
      },
      {
        path: '/app/download',
        name: 'download',
        component: './Welcome',
      },
    ],
  },
  {
    path: '/other',
    name: 'other',
    icon: 'menu',
    access: 'premission',
    routes: [
      {
        path: '/other/sms',
        name: 'sms',
        component: './other/sms/SMSLog',
      },
      {
        path: '/other/feedback',
        name: 'feedback',
        component: './Welcome',
      },
      {
        path: '/other/industry',
        name: 'industry',
        component: './Welcome',
      },
      {
        path: '/other/school',
        name: 'school',
        component: './Welcome',
      },
      {
        path: '/other/city',
        name: 'city',
        component: './Welcome',
      },
      {
        path: '/other/picture',
        name: 'picture',
        component: './Welcome',
      },
      {
        path: '/other/block-work',
        name: 'block-work',
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
