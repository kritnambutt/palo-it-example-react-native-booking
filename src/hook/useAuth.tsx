// ** Import asyncStore
import asyncStorage from '../utility/asyncStorage';

const useAuth = () => {
  const isAuth = async () => {
    let checkAuth = (await asyncStorage._getData({key: 'isLogin'}))
      ? true
      : false;
    return checkAuth;
  };

  return {isAuth};
};

export default useAuth;
