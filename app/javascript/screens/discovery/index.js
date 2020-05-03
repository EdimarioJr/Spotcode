import React,{useState,useEffect} from 'react';
import NavbarFooter from  "../../components/common/NavbarFooter"
import Album from "../../components/album/Album"
import {Container, GridAuto} from "../../global_style"
import AlbumService from "../../services/album"
import styled from "styled-components"

const Title = styled.h1`
    color:white;
    font-weight: bolder;
    text-align: left;
    margin-top: 30px;
    margin-botom: 10px;
`




export default function DiscoveryScreen(){
    const [recent, setRecent] = useState([])
    const [recommended, setRecommended] = useState([])

    async function fetchAlbum(){
        const response = await AlbumService.index()
        setRecent(response.data.recent_albums)
        setRecommended(response.data.recommended_albums)
        console.log(response.data)
    }

    useEffect(()=>{
        fetchAlbum();
    },[])

    const recent_albums = recent.map(function(album,key){
        return(
            <Album id={album.id} key={key} album_cover={album.cover_url} title={album.title} artist={album.artist_name}/> 
        );
    })

    const recommended_albums = recommended.map(function(album,key){
        return(
            <Album id={album.id} key={key} album_cover={album.cover_url} title={album.title} artist={album.artist_name}/> 
        );
    })

   
    return <>
        <Container>
        <Title>Recent Albums</Title>
        <GridAuto>
            {recent_albums}
        </GridAuto>
        <Title>Recommended Albums</Title>
        <GridAuto>
            {recommended_albums}
        </GridAuto>
        </Container>
        <NavbarFooter/>
    </>
}