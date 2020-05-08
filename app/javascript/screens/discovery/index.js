import React, { useState, useEffect } from "react";
import NavbarFooter from "../../components/common/NavbarFooter";
import Album from "../../components/album/Album";
import { Container, GridAuto } from "../../global_style";
import AlbumService from "../../services/album";
import styled from "styled-components";

const Title = styled.h1`
  color: white;
  font-weight: bolder;
  text-align: left;
  margin-top: 30px;
  margin-botom: 10px;
`;

export default function DiscoveryScreen() {
  const [recent, setRecent] = useState([]);
  const [recommended, setRecommended] = useState([]);

  async function fetchAlbums() {
    const response = await AlbumService.index();
    setRecent(response.data.recent_albums);
    setRecommended(response.data.recommended_albums);
  }

  useEffect(() => {
    fetchAlbums();
  }, []);

  const recent_albums = recent.map(function (album, key) {
    return <Album key={key} album={album} primary={true} />;
  });

  const recommended_albums = recommended.map(function (album, key) {
    return <Album key={key} album={album} primary={true} />;
  });

  console.log(recent_albums)
  console.log(recommended_albums)
  return (
    <>
      <Container>
        <Title>Recent Albums</Title>
        <GridAuto>{recent_albums}</GridAuto>
        <Title>Recommended Albums</Title>
        <GridAuto>{recommended_albums}</GridAuto>
      </Container>
      <NavbarFooter />
    </>
  );
}
