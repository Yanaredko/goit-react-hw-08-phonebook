import { useAuth } from 'hooks';
import { NavLinkStyled } from './navigationsStyled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      {!isLoggedIn && <NavLinkStyled to="/">Phonebook</NavLinkStyled>}

      {isLoggedIn && <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>}
    </>
  );
};

export default Navigation;