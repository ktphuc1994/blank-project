import postServ from '@services/postServ';
import { useEffect, useState } from 'react';

// import types and interfaces
import { InterfacePost } from '~types/post';

const AuctionPage = () => {
  const [posts, setPosts] = useState<InterfacePost[]>();

  useEffect(() => {
    postServ
      .getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return <div>AuctionPage</div>;
};

export default AuctionPage;
