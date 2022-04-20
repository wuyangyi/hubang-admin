import React, { useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, message, Select, Switch } from 'antd';
import styles from './AddAdmin.less';
import staticData from '@/utils/staticData';
import { addAdmin } from '@/services/user';
import { history } from 'umi';

const AddAdmin: React.FC = () => {
  const [bean, setBean] = useState<USERAPI.AddAdminParams>({
    phone: '',
    username: '',
    role: 2,
    can_req_im: 0,
  });
  const [isLoading, setLoading] = useState(false);

  function onChange(type: string, value: any) {
    console.log('onChange', type, value);

    bean[type] = value;
    setBean(bean);
  }

  const doSubmit = () => {
    const params = bean;
    if (!params.phone || !params.username) {
      return;
    }
    setLoading(true);
    const hide = message.loading('正在添加');
    addAdmin(params)
      .then((res) => {
        if (res.status === 1) {
          message.success('添加成功');
          history.replace('/admin/list');
        } else {
          message.error(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
        message.error('添加失败');
      })
      .finally(() => {
        setLoading(false);
        hide();
      });
  };

  return (
    <PageContainer>
      <Card className={styles.cardCOntent}>
        <div className={styles.outBody}>
          <Form>
            <Form.Item
              name="phone"
              label="手&ensp;机&ensp;号"
              rules={[
                {
                  required: true,
                  message: '请填写手机号',
                },
              ]}
            >
              <Input
                className={styles.nameInput}
                maxLength={11}
                allowClear
                value={bean.phone}
                type="tel"
                placeholder="请填写手机号"
                onChange={(e) => {
                  onChange('phone', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="nickname"
              label="用&ensp;户&ensp;名"
              rules={[
                {
                  required: true,
                  message: '请填写用户名',
                },
              ]}
            >
              <Input
                className={styles.nameInput}
                allowClear
                maxLength={50}
                value={bean.username}
                placeholder="请填写用户名"
                onChange={(e) => {
                  onChange('username', e.target.value);
                }}
              />
            </Form.Item>
            <Form.Item
              name="role"
              label="权限级别"
              rules={[
                {
                  required: true,
                  message: '请填写用户名',
                },
              ]}
            >
              <Select
                defaultValue={staticData.adminRoleData[2]}
                className={styles.nameInput}
                onChange={(value) => {
                  onChange('role', value);
                }}
              >
                <Select.Option value="1">超级管理员</Select.Option>
                <Select.Option value="2">普通管理员</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="can_req_im" label="能否请求IM">
              <Switch
                checkedChildren="是"
                unCheckedChildren="否"
                onChange={(checked) => {
                  onChange('can_req_im', checked ? 1 : 0);
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button className={styles.btn} type="primary" onClick={doSubmit} loading={isLoading}>
                添&nbsp;&nbsp;加
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Card>
    </PageContainer>
  );
};

export default AddAdmin;
