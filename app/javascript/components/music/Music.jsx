import React from "react";
import styled from "styled-components";
import Favorite from "../common/Favorite";
import { FaStopCircle, FaPlayCircle } from "react-icons/fa";

const MusicGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr 1fr;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;

  .center {
    align-self: center;
  }
`;

const MusicInfo = styled.div`
  color: white;
  border-bottom: 1px solid white;
`;

export default function Music(props) {
  let music_icon = props.playing ? (
    <FaStopCircle
      color="#1dd960"
      size="35px"
      onClick={() => {
        props.clicou([]);
        console.log(props);
      }}
    />
  ) : (
    <FaPlayCircle
      color="white"
      size="35px"
      onClick={() => {
        props.clicou(props.song);
        console.log(props);
      }}
    />
  );

  return (
    <>
      <MusicGrid>
        <div className="center">{music_icon}</div>
        <MusicInfo>
          <h3>{props.song.title}</h3>
          <h4>{props.song.artist_name}</h4>
        </MusicInfo>
        <div className="center">
          <Favorite
            kind="songs"
            id={props.song.id}
            favored={props.song.favorite}
          />
        </div>
      </MusicGrid>
    </>
  );
}
