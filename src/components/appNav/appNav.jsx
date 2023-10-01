import AuthNav from 'components/authNav';
import Navigation from 'components/navigation';
import UserMenu from 'components/userMenu';
import { useAuth } from 'hooks';
import { HeaderStyled } from './appNavStyles';

const AppNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};

export default AppNav;