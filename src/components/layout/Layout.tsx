import React, { ReactElement } from 'react';

interface Porps {
  children?: ReactElement | null;
}

const Layout: React.FC<Porps> = ({ children }) => {
  return (
    <div>Layout</div>
  )
}

export default Layout;