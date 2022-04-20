declare namespace BASEAPI {
  type BaseBean<T = undefined> = {
    status: number;
    message: string;
    need_decrypt: boolean;
    data: T;
  };

  type PageListBean<T = undefined> = BaseBean<PageBean<T>>;

  type PageBean<T = undefined> = {
    list: T[];
    page: number;
    total: number;
  };

  type PageParams = {
    page: number;
    size: number;
  };

  type FilterBean = {
    lable: string;
    value?: any;
  };
}
