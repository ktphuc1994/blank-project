import { FC } from 'react';
import oceanPic from './assets/images/ocean.jpg';
import './assets/styles/app.css';

const App: FC = () => {
  return (
    <div>
      <h1>Bài viết được viết tại blog {process.env.HOST}</h1>
      <img src={oceanPic} alt='Ocean Picture' width={100} height={100} />
    </div>
  );
};

export default App;
