import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FavoriteService from "../../services/favorites";
import ResultTabs from "../common/ResultTabs"

export default function Favorite() {
  const [favorites, setFavorites] = useState({});

  async function fetchFavorites() {
    const response = await FavoriteService.index();
    await setFavorites(response.data);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  return <>
      <ResultTabs albums={favorites.album || []} songs={favorites.songs || []} artists={favorites.artists || []}/>
  </>;
}
