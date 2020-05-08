import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AlbumStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
  text-align: ${(props) => (props.primary ? "left" : "center")};

  h3 {
    font-weight: bolder;
    margin: 5px 0;
  }

  h4 {
    font-weight: 300;
  }

  #album-cover {
    width: ${(props) => (props.primary ? "380px" : "320px")};
    height: ${(props) => (props.primary ? "380px" : "320px")};
    background-image: url(${(props) => props.cover});
    background-size: cover;
  }
`;

export default function Album(props) {
  return (
    <>
      <Link to={`albums/${props.album.id}`}>
        <AlbumStyle cover={props.album.cover_url} primary={props.primary}>
          <div id="album-cover"></div>
          <h3>{props.album.title}</h3>
          <h4>{props.album.artist_name}</h4>
        </AlbumStyle>
      </Link>
    </>
  );
}
