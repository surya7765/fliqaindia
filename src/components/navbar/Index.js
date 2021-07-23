import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavBarContainer,
  NavLogo,
  NavItem,
} from "./navbarelements";

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <img
              style={{ width: "170px" }}
              src="https://cutt.ly/3m8i42t"
              alt="logo"
            />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/" activeStyle>
                HOME
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" activeStyle>
                ABOUT US
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/service" activeStyle>
                SERVICES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/freelance" activeStyle>
                FREELANCERS
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/blog" activeStyle>
                BLOG
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tutorial" activeStyle>
                TUTORIAL
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" activeStyle>
                CONTACT US
              </NavLink>
            </NavItem>
          </NavMenu>
          {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
