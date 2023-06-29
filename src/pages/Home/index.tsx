import oceanPic from '@assets/images/ocean.jpg';

const HomePage = () => {
  return (
    <div>
      <h1>Bài viết được viết tại blog {process.env.HOST}</h1>
      <img src={oceanPic} alt='Ocean Picture' width={100} height={100} />
    </div>
  );
};

export default HomePage;
