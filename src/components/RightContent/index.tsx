import { Space } from 'antd';
// import { QuestionCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { useModel, SelectLang } from 'umi';
import Avatar from './AvatarDropdown';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export type SiderTheme = 'light' | 'dark';

const GlobalHeaderRight: React.FC = () => {
  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue=""
        options={[
          {
            label: <a href="/user/list">用户列表</a>,
            value: '用户列表',
          },
          {
            label: <a href="/other/sms">短信日志</a>,
            value: '短信日志',
          },
          {
            label: <a href="/helper/audit">互帮审核</a>,
            value: '互帮审核',
          },
          {
            label: <a href="/order/list">订单管理</a>,
            value: '订单管理',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      {/* <span
        className={styles.action}
        onClick={() => {
          window.open('https://pro.ant.design/docs/getting-started');
        }}
      >
        <QuestionCircleOutlined />
      </span> */}
      <Avatar />
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
