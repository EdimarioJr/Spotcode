import React, { useEffect, useState, useRef } from "react";
import { FlexColumnCenter, Button } from "../../global_style";
import styled from "styled-components";
import Music from "./Music";
import RecentlyHeardService from "../../services/recently_heards";

const Dashboard = styled(FlexColumnCenter)`
  width: 450px;
  margin-top: 30px;

  audio {
    visibility: hidden;
  }
`;

export default function MusicDashboard(props) {
  const [playing, setPlaying] = useState([]);
  const [musics, setMusics] = useState([]);
  const audioRef = useRef();
  const [playRandom, setPlayRandom] = useState(false);

  function NextSong() {
    if (playRandom) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else setPlaying([]);
  }

  function SwitchRandom() {
    if (playRandom) {
      setPlayRandom(false);
      setPlaying([]);
    } else setPlayRandom(true);
  }

  useEffect(() => {
    if (playRandom) NextSong();
  }, [playRandom]);

  useEffect(() => {
    setMusics(
      props.songs.map((song, key) => (
        <Music
          song={song}
          key={key}
          playing={playing.id == song.id}
          clicou={setPlaying}
        />
      ))
    );
  }, [props.songs, playing]);

  useEffect(() => {
    if (audioRef.current !== null) {
      audioRef.current.pause();
      audioRef.current.load();
      if (playing.id) {
        audioRef.current.play();
        console.log(playing)
        RecentlyHeardService.create(playing.album_id);
      }
    }
  }, [playing]);

  return (
    <Dashboard>
      <Button size primary onClick={() => SwitchRandom()}>
        {playRandom ? "Pausar" : "Tocar Aleatório"}
      </Button>
      <audio controls ref={audioRef} onEnded={() => NextSong()}>
        <source src={playing.file_url} type="audio/mp3" />
      </audio>
      {musics}
    </Dashboard>
  );
}
