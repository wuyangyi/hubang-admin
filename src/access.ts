/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { currentUser?: USERAPI.AuthBean | undefined }) {
  const { currentUser: { role = 0 } = {} } = initialState || {};
  return {
    premission: (route = {} as any) => {
      if (role === 1) {
        return true;
      }
      if (role === 2) {
        return !['/admin', '/group', '/session'].includes(route.path);
      }
      return false;
    },
  };
}
