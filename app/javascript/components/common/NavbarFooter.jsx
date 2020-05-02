import React from "react";
import styled from "styled-components";
import { FaHome, FaSearch, FaHeart } from "react-icons/fa";
import {Link} from "react-router-dom"

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid white;
  height: 60px;
  margin-top: auto;
`;

export default function NavbarFooter() {
  return (
    <>
      <Navbar>
        <Link to="/discovery">
            <FaHome size="25px" color="white"/>
        </Link>
        <Link to="/search">  
            <FaSearch size="25px" color="white"/>
         </Link>
        <Link to="/favorites">
            <FaHeart size="25px" color="white"/>
        </Link>
      </Navbar>
    </>
  );
}