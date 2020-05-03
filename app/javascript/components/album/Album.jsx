import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"


const AlbumStyle = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    color: white;

    h3{
        font-weight:bolder;
        margin: 5px 0;
    }

    h4{
        font-weight: 300;
    }

    #album-cover{
        width: 380px;
        height: 380px;
        background-image: url(${props => props.cover});
        background-size: cover;
    }
`

export default function Album(props){
    return(
        <>
            <Link to={`album/${props.id}`}>
                <AlbumStyle cover={props.album_cover}>
                    <div id="album-cover"></div>
                    <h3>{props.title}</h3>
                    <h4>{props.artist}</h4>
                </AlbumStyle>
            </Link>
        </>
    )
}