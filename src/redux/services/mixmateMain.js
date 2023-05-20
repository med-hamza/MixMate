
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



export const mixmateApi = createApi({

    reducerPath: 'mixmateApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'f783702126msh4f45456f9e208f0p1a4437jsn848f93049dfe');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({
            query: () => ({
                url: '/charts/track?pageSize=20'
            })
        }),
        getSongDetails: builder.query({ 
            query: ( {songid} ) => 
        `songs/get-details?key=${songid}` 
    }),
    getRelatedSongs: builder.query({
        query:({ songid }) => 
        `songs/list-recommendations?key=${songid}`
    }),
    getArtistDetails: builder.query({
        query:({artistId})=> 
        `artists/get-details?id=${artistId}`
    }),
    getSearchSong:builder.query({
        query:({ searchTerm })=> 
        `search?term=${searchTerm}`
    }),
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetRelatedSongsQuery,
    useGetArtistDetailsQuery,
    useGetSearchSongQuery,
} = mixmateApi;