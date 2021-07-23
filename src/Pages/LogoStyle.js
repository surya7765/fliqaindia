import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Rectangle = styled.div`
  margin-top: 50px;
  height: 90px;
  width: 100%;
  background: #faeacc;
`;

export const Btn = styled.nav`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const BtnLink1 = styled(LinkS)`
  font-family: "Poppins", sans-serif;
  border-radius: 30px;
  background: #add7cc;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;

export const BtnLink2 = styled(LinkS)`
  font-family: "Poppins", sans-serif;
  border-radius: 30px;
  background: #f9b668;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  cursor: pointer;
  align-items: center;
  justify-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
`;
