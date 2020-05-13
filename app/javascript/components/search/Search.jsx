import React, { useState, useEffect } from "react";
import Categories from "../common/Categories";
import SearchBar from "./SearchBar";
import { FlexColumnCenter } from "../../global_style";
import CategoriesService from "../../services/categories";
import ResultTabs from "../common/ResultTabs";
import SearchService from "../../services/search";

export default function Search() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [songs, setSongs] = useState([]);

  async function fetchCategorySearch(id) {
    const response = await CategoriesService.show(id);
    setAlbums(response.data["albums"]);
    setArtists(response.data["artists"]);
    setSongs(response.data["songs"]);
  }

  async function fetchSearch(query) {
    const response = await SearchService.index(query);
    setAlbums(response.data["albums"]);
    setArtists(response.data["artists"]);
    setSongs(response.data["songs"]);
  }

  return (
    <>
      <FlexColumnCenter>
        <SearchBar fetchSearch={fetchSearch} />
        <ResultTabs albums={albums} artists={artists} songs={songs} />
        <Categories fetchCategorySearch={fetchCategorySearch} />
      </FlexColumnCenter>
    </>
  );
}
