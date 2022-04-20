declare namespace USERAPI {
  type AuthBean = {
    id: number;
    name: string;
    phone: string;
    role: number;
    status: number;
    token: string;
    can_req_im: number;
    create_time: string;
  };

  type AdminBean = {
    id: number;
    name: string;
    phone: string;
    last_login_ip: string;
    last_login_time: string;
    role: number;
    status: number;
    can_req_im: number;
    create_time: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type LoginParams = {
    phone: string;
    password: string;
    code: string;
    type: string;
  };

  type CodeLoginParams = {
    phone: string;
    type: number;
  };

  type User = {
    id: string;
    nickname: string;
    phone: string;
    wx_open_id: string;
    avatar: string;
    sex: number;
    birthday: string;
    description: string;
    school: string;
    province: string;
    city: string;
    credit_score: number;
    order_rate: number;
    authentication_type: number;
    authentication_id: string;
    user_integral: number;
    follow_number: number;
    fan_number: number;
    accout_type: number;
    client: string;
    create_time: string;
  };

  type AddAdminParams = {
    username: string;
    phone: string;
    role: number;
    can_req_im: number;
  };

  type UserFilter = {
    id?: string;
    nickname?: string;
    phone?: string;
    wx_open_id?: string;
    accout_type?: number;
    client?: string;
  };
}
