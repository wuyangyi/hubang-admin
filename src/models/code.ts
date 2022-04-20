import { getCodeList } from '@/services/other';
import staticData from '@/utils/staticData';
import { useCallback, useState } from 'react';

export default () => {
  const [codeBean, setCodeBean] = useState<BASEAPI.PageBean<OTHERAPI.PhoneCodeBean>>({
    list: [],
    page: 0,
    total: 0,
  }); //短信日志列表

  const [realPage, setRealPage] = useState(1);
  const [key, setKey] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  const getCodeData = useCallback((page: number, keyword: string, doSearch: boolean) => {
    if (page === codeBean.page) {
      return;
    }
    if (doSearch) {
      setSearchIsLoading(true);
    }
    setKey(keyword);
    setRealPage(page);
    setLoading(true);
    getCodeList({
      page: page,
      size: staticData.pageLimit,
      key: keyword,
    })
      .then((res) => {
        if (res.status === 1) {
          setCodeBean(res.data);
        }
      })
      .finally(() => {
        setLoading(false);
        if (doSearch) {
          setSearchIsLoading(false);
        }
      });
  }, []);

  return {
    codeBean,
    isLoading,
    searchIsLoading,
    key,
    realPage,
    getCodeData,
  };
};
