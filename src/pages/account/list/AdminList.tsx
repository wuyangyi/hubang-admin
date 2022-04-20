import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { history, useModel } from 'umi';
import { Button, Table, Tag } from 'antd';
import staticData from '@/utils/staticData';
import styles from '../../user/list/UserList.less';
import { PlusOutlined } from '@ant-design/icons';

const AdminList: React.FC = () => {
  const { adminData, isLoading, getAdminListData } = useModel('admin');
  useEffect(() => {
    getAdminListData(1);
  }, [getAdminListData]);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: '级别',
      dataIndex: 'role',
      key: 'role',
      render: (role: number) => {
        return <span>{staticData.adminRoleData[role]}</span>;
      },
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (accout_type: number) => {
        return (
          <Tag color={accout_type === 1 ? 'red' : 'green'}>
            {accout_type === 1 ? '禁用' : '正常'}
          </Tag>
        );
      },
    },
    {
      title: '请求AI接口',
      dataIndex: 'can_req_im',
      key: 'can_req_im',
      render: (can_req_im: number) => {
        return <span>{can_req_im === 1 ? '是' : '否'}</span>;
      },
    },
    {
      title: '添加时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <div>
            <Button size="small" type="primary" className={styles.btn}>
              编辑
            </Button>
            <Button danger size="small" type="primary" className={styles.btn}>
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <PageContainer
      extra={[
        <Button
          type="primary"
          key="add"
          icon={<PlusOutlined />}
          onClick={() => {
            history.push('/admin/add');
          }}
        >
          添加
        </Button>,
      ]}
    >
      <Table
        bordered={true}
        loading={isLoading}
        dataSource={adminData.list || []}
        columns={columns}
        pagination={{
          total: adminData.total,
          pageSize: staticData.pageLimit,
          showSizeChanger: false,
          hideOnSinglePage: true,
          size: 'default',
          onChange: (page: number) => {
            getAdminListData(page);
          },
        }}
        size="middle"
      />
    </PageContainer>
  );
};

export default AdminList;
