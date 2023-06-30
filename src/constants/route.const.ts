interface InterfaceRouteInfo {
  title: string;
  key: string;
}

const ROUTES: Record<string, InterfaceRouteInfo> = {
  '/': {
    title: 'Home',
    key: 'home'
  },
  '/auction': {
    title: 'Auction',
    key: 'auction'
  }
};

export default ROUTES;
