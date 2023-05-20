
import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';


const CountryTracks = () => {
const [country, setCountry] = useState('');
const [loading, setLoading] = useState(true)
const { activeSong, isPlaying } = useSelector((state) => state.player);

     useEffect(()=>{
        axios.get(`https://geo.ipify.org/api/v2/country?apiKey=at_kHVEWuoJbFrMRyqzfGAtoHT1osvy5&ipAddress=8.8.8.8`)
        .then((res)=>setCountry(res?.data?.location?.country))
        .catch((err)=>console.log(err))
        .finally(()=>setLoading(false));
     },[country]);

    return(
        <>
        </>
    )
}


export default CountryTracks;
