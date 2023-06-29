import { Navigate, Outlet } from 'react-router-dom';

// import local services
import localServ from '@services/localServ';

const PrivatedRoute = () => {
  const token = localServ.getToken();
  if (!token) {
    return <Navigate to='/login' replace />;
  }
  return <Outlet />;
};

export default PrivatedRoute;
