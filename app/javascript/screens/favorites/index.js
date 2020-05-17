import React from "react";
import NavbarFooter from "../../components/common/NavbarFooter";
import Favorite from "../../components/favorites/Favorite";
import { Title } from "../../global_style";

export default function FavoritesScreen() {
  return (
    <>
      <Title>FavoritesScreen</Title>
      <Favorite />
      <NavbarFooter />
    </>
  );
}
