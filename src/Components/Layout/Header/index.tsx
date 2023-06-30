import { getRouteInfo } from '@/utils';
import Menu, { MenuProps } from 'antd/es/menu';
import { Link, useLocation } from 'react-router-dom';

const items: MenuProps['items'] = [
  { label: <Link to='/'>Home</Link>, key: 'home' },
  { label: <Link to='/auction'>Auction</Link>, key: 'auction' }
];

const Header = () => {
  const { pathname } = useLocation();
  const selectedKey = getRouteInfo(pathname);

  return (
    <div>
      <Menu mode='horizontal' items={items} selectedKeys={selectedKey ? [selectedKey.key] : undefined} />
    </div>
  );
};

export default Header;
