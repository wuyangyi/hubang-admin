import { getAdminList } from '@/services/user';
import staticData from '@/utils/staticData';
import { useCallback, useState } from 'react';

export default () => {
  const [adminData, setAdminData] = useState<BASEAPI.PageBean<USERAPI.AdminBean>>({
    list: [],
    page: 0,
    total: 0,
  }); //用户列表

  const [isLoading, setLoading] = useState(false);

  const getAdminListData = useCallback((page: number) => {
    if (page === adminData.page) {
      return;
    }
    setLoading(true);
    getAdminList({
      page: page,
      size: staticData.pageLimit,
    }).then((res) => {
      setLoading(false);
      if (res.status === 1) {
        setAdminData(res.data);
      }
    });
  }, []);

  return {
    adminData,
    isLoading,
    getAdminListData,
  };
};
