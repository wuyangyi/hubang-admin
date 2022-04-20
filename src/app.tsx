import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import { SettingDrawer } from '@ant-design/pro-layout';
import { PageLoading } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { history } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
// import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import defaultSettings from '../config/defaultSettings';
import dateUtils from './utils/dateUtils';
import cookieUils from './utils/cookieUtils';
import type { RequestOptionsInit } from 'umi-request';
import aesUtils from './utils/aesUtils';
import { autoLogin } from './services/user';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/account/login';

/** 获取用户信息比较慢的时候会展示一个 loading */
export const initialStateConfig = {
  loading: <PageLoading />,
};

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: USERAPI.AuthBean;
  loading?: boolean;
}> {
  const fetchAutoLogin = async () => {
    try {
      const msg = await autoLogin();
      if (msg.status === 1) {
        return msg.data;
      } else {
        history.push(loginPath);
      }
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果是登录页面，不执行
  if (history.location.pathname !== loginPath) {
    const currentUser = await fetchAutoLogin();
    return {
      currentUser,
      settings: defaultSettings,
    };
  }
  return {
    settings: defaultSettings,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    links: isDev
      ? [
          // <Link to="/umi/plugin/openapi" target="_blank">
          //   <LinkOutlined />
          //   <span>OpenAPI 文档</span>
          // </Link>,
          // <Link to="/~docs">
          //   <BookOutlined />
          //   <span>业务组件文档</span>
          // </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children, props) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {!props.location?.pathname?.includes('/login') && (
            <SettingDrawer
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

// 请求前拦截器
const authHeaderInterceptor = (url: string, options: RequestOptionsInit) => {
  const token = cookieUils.getToken();
  const header = {
    now_time: `${dateUtils.getNowTime()}`,
    client: 'admin-pc',
    version: '1.0',
    did: 'HUBANG_ADMIN',
    token: token || '',
  };
  // const aesHeader = `&now_time=${header['now_time']}&client=${header['client']}&version=${header['version']}&did=${header['did']}&token=${header['token']}`;
  const aesHeader =
    'now_time=' +
    header['now_time'] +
    '&client=' +
    header['client'] +
    '&version=' +
    header['version'] +
    '&did=' +
    header['did'] +
    '&token=' +
    header['token'];
  header['sign'] = aesUtils.encrypt(aesHeader);
  header['Content-Type'] = 'application/json';
  return {
    url: `${url}`,
    options: { ...options, interceptors: true, headers: header },
  };
};

// // 请求后拦截器
// const responseInterceptors = (response: Response, options: RequestOptionsInit) => {
//   return response;
// };

export const request: RequestConfig = {
  // 新增请求拦截器
  requestInterceptors: [authHeaderInterceptor],
  // responseInterceptors: [responseInterceptors],
};
