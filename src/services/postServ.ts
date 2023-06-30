import http from './http';

// import types and interfaces
import { InterfacePost } from '~types/post';

const postServ = {
  getPosts: async () => {
    const response = await http<InterfacePost[]>({
      method: 'GET',
      url: '/posts'
    });
    return response.data;
  }
};

export default postServ;
