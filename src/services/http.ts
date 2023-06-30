import { AxiosRequestConfig } from 'axios';

// import local constants
import { AXIOS_GENERATOR } from 'src/config/axiosConfig';

const http = <T>(config: AxiosRequestConfig) => AXIOS_GENERATOR(process.env.REACT_APP_API_URL).request<T>(config);

export default http;
