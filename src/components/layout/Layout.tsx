import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import LogoutButton from '../logoutButton/LogoutButton';

interface Porps {
  children?: ReactElement | null;
}

const Layout: React.FC<Porps> = ({ children }) => {
  return (
    <div>Layout
      <Outlet />
      <LogoutButton />
    </div>
    
  )
}

export default Layout;