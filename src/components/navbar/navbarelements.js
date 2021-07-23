import { NavLink as LinkR } from "react-router-dom";
import styled from "styled-components";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #faeacc;
  height: 50px;
  display: flex;
  position: sticky;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  width: 150px;
  height: 40px;
  margin-top: 20px;
  cursor: pointer;
  justify-self: flex-start;
  display: flex;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavLink = styled(LinkR)`
  color: #2e2b26;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.7rem;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  &.active {
    color: #91b4a9;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;


