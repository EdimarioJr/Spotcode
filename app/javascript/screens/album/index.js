import React,{useEffect,useState} from 'react';
import NavbarFooter from  "../../components/common/NavbarFooter"
import {FlexColumnCenter} from "../../global_style"
import AlbumService from "../../services/album"
import {useParams} from "react-router-dom"
import Album from "../../components/album/Album"
import styled from "styled-components"


export default function AlbumScreen(){
    const [album,setAlbum] = useState([])
    let { id } = useParams()

    async function fetchAlbum(){
        const response = await AlbumService.show(id)
        console.log(response.data)
        setAlbum(response.data)
    }

    useEffect(()=>{
        fetchAlbum()
    },[])
    
    return <>
        <FlexColumnCenter>
            <Album album={album} primary={false}/>
        </FlexColumnCenter>
        <NavbarFooter/>
    </>
}