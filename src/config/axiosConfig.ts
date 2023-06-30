import axios from 'axios';

// import local services
import localServ from '@services/localServ';

export const AXIOS_GENERATOR = (baseURL: string) => {
  const config = {
    baseURL,
    headers: {
      Authorization: 'Bearer ' + localServ.getToken()
    }
  };
  return axios.create(config);
};
