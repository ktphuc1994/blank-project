import { useEffect, useState } from 'react';

// import local library
import { AxiosError } from 'axios';

// import types and interfaces
import { InterfacePost } from '~types/post';

// import local services
import postServ from '@services/postServ';

// import local utils
import showNotify from '@utils/notify';

// import ANTD components
import Card from 'antd/es/card/Card';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';

const AuctionPage = () => {
  const [posts, setPosts] = useState<InterfacePost[]>();

  useEffect(() => {
    postServ
      .getPosts()
      .then((res) => {
        setPosts(res);
      })
      .catch((e: AxiosError) => {
        showNotify('error', e.message);
      });
  }, []);

  if (!posts) return <div>Loading...</div>;
  if (posts.length === 0) return <div>Empty Posts</div>;

  return (
    <Row gutter={6} style={{ margin: 0 }}>
      {posts.map((post) => (
        <Col span={6} key={post.id} style={{ padding: '0.5rem' }}>
          <Card title={post.body}>
            <p>{post.body}</p>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default AuctionPage;
