
import SongBar from "./SongBar";


const RelatedSongs = ({data,  isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId}) => (
  <div className="flex flex-col">
<h1 className="font-bold text-2xl mb-3  sm:text-3xl text-[#0F1E36]">
Top Recommendations :
</h1>
<div className="mt-4 w-full flex flex-col">
    
    {data.tracks?.map((song, i)=>(
    <SongBar 
    key={`${song.key}-${artistId}`}
    song={song}
    i={i}
    artistId={artistId}
    isPlaying={isPlaying}
    activeSong={activeSong}
    handlePlayClick={handlePlayClick}
    handlePauseClick={handlePauseClick}
    />  
    ))}
    

</div>
  </div>

);

export default RelatedSongs;
