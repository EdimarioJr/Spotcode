import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  background-color: transparent;
  color: white;
  border-bottom: ${(props) => (props.selected ? "5px solid #1dd960" : "none")};
  text-align: center;
  padding: 5px 15px;
  width: 100%;
  font-size: 30px;
  cursor: pointer;
  margin: 0 40px;
`;

export default function Tab(props) {
  return (
    <TabContainer
      selected={props.selected}
      onClick={() => {
        props.clicou(props.id);
      }}
    >
      {props.name}
    </TabContainer>
  );
}
