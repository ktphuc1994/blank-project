// import local constants
import { AUTH_TOKEN } from '@constants/app.const';

// import local utils
import { parseJson } from '@utils/index';

const localServ = {
  getItem: (key: string) => {
    const localItem = localStorage.getItem(key);
    if (!localItem) return null;
    return parseJson(localItem);
  },
  setItem: (key: string, value: string) => {
    localStorage.setItem(key, value);
  },
  getToken: () => localServ.getItem(AUTH_TOKEN)
};

export default localServ;
