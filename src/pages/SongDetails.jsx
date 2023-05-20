import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import {HiArrowSmLeft} from 'react-icons/hi';
import { useSelector, useDispatch } from "react-redux";
import { Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetRelatedSongsQuery, useGetSongDetailsQuery } from "../redux/services/mixmateMain";


const SongDetails = ( ) => {

    const dispatch = useDispatch();
     const { songid } = useParams();
     const {activeSong, isPlaying} = useSelector((state)=>state.player);
  const { data : songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({ songid });
  const {data,  isFetching :isFetchingRelatedSong , error} = useGetRelatedSongsQuery({ songid });
  
  if (isFetchingSongDetails || isFetchingRelatedSong) return 
  <Loader title="Searching son details" />
 
  const handlePauseClick= ()=>{
    dispatch(playPause(false));
        
      };

      const handlePlayClick= (song, i) => {
    dispatch(setActiveSong({song, data, i}));
    dispatch(playPause(true));
      };
 

     return (

      <>
      <div className="px-6 bg-gradient-to-b from-transparent
    to-[#F4F9FF]">
       <div className="ml-5 mt-3">
         <Link to=".."> 
         <HiArrowSmLeft
         size={30}
          /> 
          </Link> 
       </div>
     <div className="section_artist flex flex-row  items-centr px-6 mt-5 "> 
      
       {/* <DetailsHeader  artistId="" songData={songData} /> */}
       <div className="flex mr-10">
        <img src={songData?.images?.background} alt={songData?.subtitle} className="lg:w-80 lg:h-[700px] sm:w-56 sm:h-80 object-cover	" />
         </div>
      
        <div className="">
        <div className="mt-5 ">
        <h2 className="text-[#0F1E36]  sm:text-5xl text-xl mb-2 font-bold">
        {songData?.title}
        </h2>
        <div className="flex items-center  mb-5">
        <h3>
        <Link className="text-[#000] sm:text-2xl text-xl mr-2" to={`/artists/${songData?.artists[0]?.adamid}`}> {songData?.subtitle} </Link> </h3> -   
        <h3 className="text-[#0F1E36] opacity-50 sm:text-2xl text-xl ml-2">  {songData?.genres.primary} </h3> 
        </div>
        </div>

        <div className="mt-5">
        <h2 className="font-bold text-2xl mb-3  sm:text-3xl text-[#0F1E36]">
        Lyrics :
       </h2>
     
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1]?.text.map((line, i) => (
              <p key={`lyrics-${line}-${i}`} className="text-gray-400 text-base my-1">{line}</p>
            ))
            : (
              <p className="text-gray-400 text-base my-1">Sorry, No lyrics found!</p>
            )}
        </div>
        </div>
      </div>
         <div className="px-6 mt-5">
        <RelatedSongs 
        data={data}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
        />
        </div>
</div>
</>
     )
}



export default SongDetails;
