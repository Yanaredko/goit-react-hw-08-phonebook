import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppNav from './appNav';
import Fallback from './fallBack/fallback';
import { MainStyled } from './mainStyles';

const Layout = () => {
  return (
    <>
      <AppNav />
      <MainStyled>
        <Suspense fallback={<Fallback />}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </>
  );
};

export default Layout;