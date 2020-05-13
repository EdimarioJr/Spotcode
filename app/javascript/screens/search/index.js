import React from "react";
import NavbarFooter from "../../components/common/NavbarFooter";
import Search from "../../components/search/Search";
import { Container, Title } from "../../global_style";
import ResultTabs from "../../components/common/ResultTabs";

export default function SearchScreen() {
  return (
    <>
      <Container>
        <Title>Search</Title>
        <Search />
      </Container>
      <NavbarFooter />
    </>
  );
}
