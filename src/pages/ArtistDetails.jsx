import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import  coveraArtist  from "../assets/cover_artist.png"
import ArtistBlock from "../components/ArtistBlock";

import { useGetArtistDetailsQuery } from "../redux/services/mixmateMain";


const ArtistDetails = ( ) => {

     const { id: artistId } = useParams();
     const {activeSong, isPlaying} = useSelector((state)=>state.player);
  const { data : artistData, isFetching: isFetchingArtistDetails} = useGetArtistDetailsQuery({ artistId });
  if (isFetchingArtistDetails) return 
  <Loader title="Loading artist details" />

  return (
    <div className="flex flex-col">
      <div className="relative">
      <img src={coveraArtist} alt={artistData?.data[0].attributes.name} className="w-full" />
      <div className="absolute bottom-10 px-6">
        <div className="flex flex-row items-center">
        <div className="px-4">
          <img
        alt="profile"
        src={
          artistId ? artistData?.data[0].attributes.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
}
        className="sm:w-32 w-20 sm:h-32 h-20 rounded-full object-cover border-2 shadow-xl shadow-black"
      />
      </div>
          <div>
      <h3 className="sm:text-4xl text-xl text-white font-bold uppercase" > 
          {artistData?.data[0].attributes.name}</h3>  
          <h4 className="sm:text-2xl text-xl text-white font-bold">
          {artistData?.data[0].attributes.genreNames}
            </h4>
            </div>
         
      </div>
      </div>
      </div>
       <div className="ml-5">

      
      </div>

      <div className="relative top-0 h-fit w-full">
        <ArtistBlock/>
     </div>

      {/* <RelatedSongs
        data={artistData?.data[0].views['top-songs']?.data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      /> */}
    </div>
  );
}



export default ArtistDetails;
