import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { Alert, message, Tabs } from 'antd';
import React, { useState } from 'react';
import { ProFormCaptcha, ProFormCheckbox, ProFormText, LoginForm } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang, useModel } from 'umi';

import styles from './index.less';
import LoginFooter from '@/components/LoginFooter';
import { getCode, login } from '@/services/user';
import cookieUils from '@/utils/cookieUtils';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginMessage, setUserLoginMessage] = useState<string>('');
  const [type, setType] = useState<string>('account');
  const { setInitialState } = useModel('@@initialState');

  const intl = useIntl();

  const handleSubmit = async (values: USERAPI.LoginParams) => {
    console.log('handleSubmit', values);
    values.type = type;

    try {
      // 登录
      const msg = await login(values);
      if (msg.status === 1) {
        cookieUils.setToken(msg.data.token);
        const defaultLoginSuccessMessage = intl.formatMessage({
          id: 'pages.login.success',
          defaultMessage: '登录成功！',
        });
        message.success(defaultLoginSuccessMessage);
        if (msg.data) {
          await setInitialState((s: any) => ({
            ...s,
            currentUser: msg.data,
          }));
        }
        /** 此方法会跳转到 redirect 参数所在的位置 */
        if (!history) return;
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        history.push(redirect || '/');
        return;
      }
      console.log(msg);
      // 如果失败去设置用户错误信息
      setUserLoginMessage(msg.message);
    } catch (error) {
      const defaultLoginFailureMessage = intl.formatMessage({
        id: 'pages.login.failure',
        defaultMessage: '登录失败，请重试！',
      });
      message.error(defaultLoginFailureMessage);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {SelectLang && <SelectLang />}
      </div>
      <div className={styles.content}>
        <LoginForm
          logo={<img alt="logo" src="/logo.png" />}
          title="互帮"
          subTitle="后台管理系统"
          initialValues={{
            autoLogin: true,
          }}
          onFinish={async (values) => {
            await handleSubmit(values as USERAPI.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType}>
            <Tabs.TabPane
              key="account"
              tab={intl.formatMessage({
                id: 'pages.login.accountLogin.tab',
                defaultMessage: '账户密码登录',
              })}
            />
            <Tabs.TabPane
              key="mobile"
              tab={intl.formatMessage({
                id: 'pages.login.phoneLogin.tab',
                defaultMessage: '手机号登录',
              })}
            />
          </Tabs>

          {userLoginMessage && <LoginMessage content={userLoginMessage} />}
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined className={styles.prefixIcon} />,
            }}
            name="phone"
            placeholder={intl.formatMessage({
              id: 'pages.login.phoneNumber.placeholder',
              defaultMessage: '手机号',
            })}
            rules={[
              {
                required: true,
                message: (
                  <FormattedMessage
                    id="pages.login.phoneNumber.required"
                    defaultMessage="请输入手机号！"
                  />
                ),
              },
              {
                pattern: /^1\d{10}$/,
                message: (
                  <FormattedMessage
                    id="pages.login.phoneNumber.invalid"
                    defaultMessage="手机号格式错误！"
                  />
                ),
              },
            ]}
          />
          {type === 'account' && (
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.password.placeholder',
                defaultMessage: '密码',
              })}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.password.required"
                      defaultMessage="请输入密码！"
                    />
                  ),
                },
              ]}
            />
          )}

          {/* {userLoginMessage && type === 'mobile' && <LoginMessage content="验证码错误" />} */}
          {type === 'mobile' && (
            <ProFormCaptcha
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              captchaProps={{
                size: 'large',
              }}
              placeholder={intl.formatMessage({
                id: 'pages.login.captcha.placeholder',
                defaultMessage: '请输入验证码',
              })}
              captchaTextRender={(timing, count) => {
                if (timing) {
                  return `${count} ${intl.formatMessage({
                    id: 'pages.getCaptchaSecondText',
                    defaultMessage: '获取验证码',
                  })}`;
                }
                return intl.formatMessage({
                  id: 'pages.login.phoneLogin.getVerificationCode',
                  defaultMessage: '获取验证码',
                });
              }}
              phoneName="phone"
              name="code"
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage
                      id="pages.login.captcha.required"
                      defaultMessage="请输入验证码！"
                    />
                  ),
                },
              ]}
              onGetCaptcha={async (phone) => {
                console.log('getCode', phone);

                const result = await getCode({
                  phone,
                  type: 3,
                });
                console.log('getCode', result);

                if (result.status !== 1) {
                  return;
                }
                message.success('发送成功！');
              }}
            />
          )}
          <div
            style={{
              marginBottom: 24,
            }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
            </a>
          </div>
        </LoginForm>
      </div>
      <LoginFooter />
    </div>
  );
};

export default Login;
