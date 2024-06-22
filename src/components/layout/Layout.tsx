import { Outlet } from 'react-router-dom';
import LogoutButton from '../logoutButton/LogoutButton';

const Layout: React.FC = () => {
  return (
    <div>
      <Outlet />
      <LogoutButton />
    </div>
    
  )
}

export default Layout;