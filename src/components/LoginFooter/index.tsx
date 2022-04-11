import { useIntl } from 'umi';
import { DefaultFooter } from '@ant-design/pro-layout';

const LoginFooter: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '互帮——互帮互助',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '互帮首页',
          title: <span style={{ color: '#333' }}>互帮首页</span>,
          href: 'https://pro.ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default LoginFooter;
