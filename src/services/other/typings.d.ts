declare namespace OTHERAPI {
  // 手机验证码bean
  type PhoneCodeBean = {
    id: number;
    phone: string;
    code: string;
    type: string;
    client: string;
    create_time: number;
  };

  type CodePageParam = {
    page: number;
    size: number;
    key: string;
  };
}
