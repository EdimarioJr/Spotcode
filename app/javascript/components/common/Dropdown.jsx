import React, { useState } from "react";
import styled from "styled-components";
import { FaAlignJustify } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

const DropdownBar = styled.div`
  background-color: white;
  border-radius: 3px;
  padding: 0 20px;
  border: 2px solid black;
  position: absolute;
  z-index: 1;


  h3 {
    padding: 10px 0;
    border-top: 1px solid gray;
  }

  &.drop-enter {
    opacity: 0;
  }

  &.drop-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }

  &.drop-exit {
    opacity: 1;
  }

  &.drop-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

export default function Dropdown(props) {
  const [action, setAction] = useState(false);

  return (
    <div>
      <div
        id="actionButton"
        onClick={() => {
          setAction(!action);
        }}
      >
        {props.botao ? props.botao : <FaAlignJustify size="2em" color="white" />}
      </div>
      <CSSTransition in={action} timeout={200} classNames="drop" unmountOnExit>
        <DropdownBar>
        <a href="users/edit">
          <h3>Editar perfil</h3>
        </a>
        <a href="users/sign_out">
          <h3>Logout</h3>
        </a>
        </DropdownBar>
      </CSSTransition>
    </div>
  );
}
