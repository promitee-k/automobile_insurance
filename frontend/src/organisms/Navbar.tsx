import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
margin: 0;
padding:0;
width: 100%;
height: 60px;
background-color: black;
display: flex;
justify-content: center;
align-items: center;
color: white;
text-decoration: none;
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
      <NavBrand to="/auth">auth</NavBrand>
      <NavMenu>
        <NavMenuItem>
          <NavLink to="/">quote</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/packages">package</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/insurance">insurance</NavLink>
        </NavMenuItem>
        <NavMenuItem>
          <NavLink to="/payment">payment</NavLink>
        </NavMenuItem>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
