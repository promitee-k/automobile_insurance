import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const NavBrand = styled(Link)`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavMenuItem = styled.li`
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar= () => {
  return (
    <NavContainer>
      <NavBrand to="/">Logo</NavBrand>
      <NavMenu>
        <NavMenuItem>
          <NavLink to="/">Home</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/">About</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/">Contact</NavLink>
        </NavMenuItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
