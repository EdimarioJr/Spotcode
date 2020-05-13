import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexRowCenter, FlexColumnCenter, GridAuto } from "../../global_style";
import Tab from "./Tab";
import Album from "../album/Album";
import MusicDashboard from "../music/MusicDashboard";

const DivResultTabs = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

const ResultCard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 350px;
  height: 350px;
  padding: 10px;

  #imagem {
    background-image: url(${(props) => props.image});
    background-size: cover;
    width: 100%;
    height: 200px;
  }

  h3 {
    margin-bottom: 5px;
  }
`;

export default function ResultTabs(props) {
  const [selected, setSelected] = useState(0);
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setArtists(
      props.artists.map((value, index) => {
        return (
          <ResultCard image={value.photo_url} key={index}>
            <div id="imagem"></div>
            <h3>{value.name}</h3>
          </ResultCard>
        );
      })
    );

    setAlbums(
      props.albums.map((value, index) => {
        return <Album album={value} key={index} />;
      })
    );
    if (props.albums.length) setSelected(1);
    else if (props.artists.length) setSelected(2);
    else if (props.songs.length) setSelected(3);
  }, [props.songs, props.artists, props.albums]);

  return (
    <DivResultTabs>
      {selected !== 0 ? (
        <FlexRowCenter>
          <Tab
            selected={selected == 1}
            id={1}
            clicou={setSelected}
            name={"Álbuns"}
          />

          <Tab
            selected={selected == 2}
            id={2}
            clicou={setSelected}
            name={"Artistas"}
          />

          <Tab
            selected={selected == 3}
            id={3}
            clicou={setSelected}
            name={"Músicas"}
          />
        </FlexRowCenter>
      ) : (
        []
      )}

      {selected == 1 ? (
        <GridAuto>{albums}</GridAuto>
      ) : selected == 2 ? (
        <GridAuto>{artists}</GridAuto>
      ) : props.songs.length ? (
        <MusicDashboard songs={props.songs} />
      ) : (
        []
      )}
    </DivResultTabs>
  );
}
