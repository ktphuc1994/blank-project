import { matchPath } from 'react-router-dom';

// import local constants
import ROUTES from '@/constants/route.const';

export const parseJson = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    return jsonString;
  }
};

export const getRouteInfo = (pathname: string) => {
  const currentRoute = Object.keys(ROUTES).find((key) => {
    if (matchPath({ path: key }, pathname)) {
      return true;
    }
    return false;
  });

  if (!currentRoute) return null;
  return ROUTES[currentRoute];
};
