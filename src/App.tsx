import { FC } from 'react';
import './assets/styles/app.css';

const App: FC = () => {
  return (
    <div>
      <h1>Bài viết được viết tại blog {process.env.HOST}</h1>
    </div>
  );
};

export default App;
