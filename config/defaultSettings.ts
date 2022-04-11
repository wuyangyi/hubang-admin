import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',

  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: '互帮后台',
  pwa: false,
  logo: 'http://wyyhubang.oss-cn-chengdu.aliyuncs.com/logo/logo-1.png',
  iconfontUrl: '',
};

export default Settings;
