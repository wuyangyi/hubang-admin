import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import { Table } from 'antd';
import staticData from '@/utils/staticData';
import Search from 'antd/lib/input/Search';
import styles from './SMSLog.less';

const SMSLog: React.FC = () => {
  const { codeBean, isLoading, searchIsLoading, key, realPage, getCodeData } = useModel('code');

  useEffect(() => {
    getCodeData(1, key, false);
  }, [getCodeData]);

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
      width: 150,
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
      width: 200,
    },
    {
      title: '验证码',
      dataIndex: 'code',
      key: 'code',
      align: 'center',
      width: 200,
    },
    {
      title: '用途',
      dataIndex: 'type',
      key: 'type',
      align: 'center',
      width: 200,
    },
    {
      title: '来源',
      dataIndex: 'client',
      key: 'client',
      align: 'center',
      width: 200,
    },
    {
      title: '发送时间',
      dataIndex: 'create_time',
      key: 'create_time',
      align: 'center',
    },
  ];

  const doSearch = (value: string) => {
    getCodeData(1, value, true);
  };

  return (
    <PageContainer
      content={
        <Search
          placeholder="手机号"
          maxLength={11}
          className={styles.search}
          type="tel"
          loading={searchIsLoading}
          allowClear={true}
          onSearch={(value) => {
            doSearch(value);
          }}
        />
      }
    >
      <Table
        bordered={true}
        dataSource={codeBean.list || []}
        columns={columns}
        loading={isLoading}
        pagination={{
          total: codeBean.total,
          pageSize: staticData.pageLimit,
          current: realPage,
          showSizeChanger: false,
          hideOnSinglePage: true,
          size: 'default',
          onChange: (page: number) => {
            getCodeData(page, key, false);
          },
        }}
        size="middle"
      />
    </PageContainer>
  );
};

export default SMSLog;
