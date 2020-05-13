import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const SearchField = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  padding: 10px 0;
  margin-bottom: 50px;
  font-size: 20px;
  font-weight: bolder;
  padding-left: 5px;
`;

export default function SearchBar(props) {
  const [query, setQuery] = useState("");

  function Search(event) {
    console.log(event.key);
    if (event.key === "Enter") {
      props.fetchSearch(query);
      setQuery("");
    }
  }

  return (
    <>
      <SearchField
        type="text"
        value={query}
        placeholder="Busque por músicas, álbums e artistas"
        onKeyDown={Search}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </>
  );
}
