import { getUserList } from '@/services/user';
import staticData from '@/utils/staticData';
import { useCallback, useState } from 'react';

export default () => {
  const [userData, setUserData] = useState<BASEAPI.PageBean<USERAPI.User>>({
    list: [],
    page: 0,
    total: 0,
  }); //用户列表

  const [realPage, setRealPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [filter, setFilter] = useState<USERAPI.UserFilter>({
    id: '',
    nickname: '',
    phone: '',
    wx_open_id: '',
    accout_type: -1,
    client: '',
  });

  const getUserListData = useCallback((page: number) => {
    if (page === userData.page) {
      return;
    }
    setRealPage(page);
    setLoading(true);
    const data = {};
    if (filter.id) {
      data['id'] = filter.id;
    }
    if (filter.nickname) {
      data['nickname'] = filter.nickname;
    }
    if (filter.phone) {
      data['phone'] = filter.phone;
    }
    if (filter.wx_open_id) {
      data['wx_open_id'] = filter.wx_open_id;
    }
    if (filter.accout_type !== -1) {
      data['accout_type'] = filter.accout_type;
    }
    if (filter.client) {
      data['client'] = filter.client;
    }
    getUserList(
      {
        page: page,
        size: staticData.pageLimit,
      },
      data,
    ).then((res) => {
      setLoading(false);
      if (res.status === 1) {
        setUserData(res.data);
      }
    });
  }, []);

  /**
   * 设置筛选条件
   * @param type
   * @param value
   */
  const setFilterInfo = (type: string, value: any) => {
    filter[type] = value;
    setFilter(filter);
  };

  return {
    userData,
    isLoading,
    realPage,
    filter,
    setFilterInfo,
    getUserListData,
  };
};
