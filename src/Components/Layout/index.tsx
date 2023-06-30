import { Outlet } from 'react-router-dom';

// import local components
import Header from './Header';
import Footer from './Footer';

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
