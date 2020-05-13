import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoriteService from "../../services/favorites";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function Favorite(props) {
  const [favored, setFavored] = useState(props.favored);

  let FavoredButton = favored ? (
    <FaHeart size="25px" color="white" onClick={() => disfavor()} />
  ) : (
    <FaRegHeart size="25px" color="white" onClick={() => favor()} />
  );

  async function disfavor() {
    await FavoriteService.delete(props.kind, props.id);
    setFavored(false);
  }

  async function favor() {
    await FavoriteService.create(props.kind, props.id);
    setFavored(true);
  }

  return <>{FavoredButton}</>;
}
