import React, { useEffect } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { useModel } from 'umi';
import { Avatar, Button, Image, Input, Table, Tag } from 'antd';
import staticData from '@/utils/staticData';
import styles from './UserList.less';
import { CaretDownOutlined, SearchOutlined } from '@ant-design/icons';
import type { FilterDropdownProps } from 'antd/lib/table/interface';
import FilterListModel from '@/components/filter/FilterListModel';

const UserList: React.FC = () => {
  const { userData, isLoading, getUserListData, realPage, filter, setFilterInfo } =
    useModel('user');
  useEffect(() => {
    getUserListData(1);
  }, [getUserListData]);

  const setFilterValue = (type: string, value: any) => {
    setFilterInfo(type, value);
    getUserListData(1);
  };

  const getSearchFilterView = (props: FilterDropdownProps, type: string, placeholder: string) => {
    return (
      <div>
        <Input.Search
          placeholder={placeholder}
          onSearch={(value: string) => {
            props.confirm();
            setFilterValue(type, value);
          }}
          allowClear={true}
        />
      </div>
    );
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      filterSearch: true,
      filterDropdown: (props: FilterDropdownProps) => getSearchFilterView(props, 'id', 'ID'),
      filterIcon: () => <SearchOutlined style={{ color: filter.id ? '#1890ff' : undefined }} />,
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      key: 'nickname',
      filterDropdown: (props: FilterDropdownProps) =>
        getSearchFilterView(props, 'nickname', '昵称'),
      filterIcon: () => (
        <SearchOutlined style={{ color: filter.nickname ? '#1890ff' : undefined }} />
      ),
      render: (nickname: string, bean: USERAPI.User) => {
        return (
          <div className={styles.nameDiv}>
            <Avatar
              alt="头像"
              size="small"
              src={bean.avatar}
              onError={() => true}
              icon={<Image src={staticData.userDefaultImage} />}
            />
            <span>{nickname}</span>
          </div>
        );
      },
    },
    {
      title: '手机号码',
      dataIndex: 'phone',
      key: 'phone',
      filterDropdown: (props: FilterDropdownProps) =>
        getSearchFilterView(props, 'phone', '手机号码'),
      filterIcon: () => <SearchOutlined style={{ color: filter.phone ? '#1890ff' : undefined }} />,
    },
    {
      title: '绑定微信',
      dataIndex: 'wx_open_id',
      key: 'wx_open_id',
      filterDropdown: (props: FilterDropdownProps) =>
        getSearchFilterView(props, 'wx_open_id', '微信ID'),
      filterIcon: () => (
        <SearchOutlined style={{ color: filter.wx_open_id ? '#1890ff' : undefined }} />
      ),
      render: (wx_open_id: number) => {
        return (
          <span style={{ color: !wx_open_id ? '#999' : undefined }}>{wx_open_id || '未绑定'}</span>
        );
      },
    },
    {
      title: '状态',
      dataIndex: 'accout_type',
      key: 'accout_type',
      filterDropdown: (props: FilterDropdownProps) => (
        <FilterListModel
          type="accout_type"
          list={[
            {
              lable: '不限',
              value: -1,
            },
            ...staticData.userAccountTypeLable,
          ]}
          onClick={(type, item) => {
            props.confirm();
            setFilterValue(type, item.value);
          }}
        />
      ),
      filterIcon: () => (
        <CaretDownOutlined style={{ color: filter.accout_type !== -1 ? '#1890ff' : undefined }} />
      ),
      render: (accout_type: number) => {
        return (
          <Tag color={accout_type === 1 ? 'red' : 'green'}>
            {staticData.userAccountTypeData[accout_type]}
          </Tag>
        );
      },
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '成单率',
      dataIndex: 'order_rate',
      key: 'order_rate',
      render: (order_rate: number) => {
        return <span>{order_rate * 100}%</span>;
      },
    },
    {
      title: '来源',
      dataIndex: 'client',
      key: 'client',
      filterIcon: () => (
        <CaretDownOutlined style={{ color: filter.client ? '#1890ff' : undefined }} />
      ),
      filterDropdown: (props: FilterDropdownProps) => (
        <FilterListModel
          type="client"
          list={[
            {
              lable: '不限',
              value: '',
            },
            ...staticData.clientLable,
          ]}
          onClick={(type, item) => {
            props.confirm();
            setFilterValue(type, item.value);
          }}
        />
      ),
    },
    {
      title: '	注册时间',
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
    <PageContainer>
      <Table
        bordered={true}
        loading={isLoading}
        dataSource={userData.list || []}
        columns={columns}
        pagination={{
          total: userData.total,
          pageSize: staticData.pageLimit,
          showSizeChanger: false,
          hideOnSinglePage: true,
          current: realPage,
          size: 'default',
          onChange: (page: number) => {
            getUserListData(page);
          },
        }}
        size="middle"
      />
    </PageContainer>
  );
};

export default UserList;
