import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";



const SongCard = ({song, activeSong, isPlaying, i, data }) => {
  
  const dispatch = useDispatch();
  const handlePauseClick= ()=>{
dispatch(playPause(false));
    

  };
  const handlePlayClick= () => {
dispatch(setActiveSong({song, data, i}));
dispatch(playPause(true));
  };
  return(
 
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
<div className={`absolute inset-0 bottom-1.5 justify-center rounded-2xl items-center bg-[#F51E38] bg-opacity-50 
group-hover:flex ${activeSong?.title === song.title ? 'flex bg-[#F51E38] bg-opacity-70' :'hidden' }`}>
    <PlayPause 
    song={song}
    handlePause={handlePauseClick}
    handlePlay={handlePlayClick}
    isPlaying={isPlaying}
    activeSong={activeSong}
    className="playpause_icon"
    />
    
    </div>
    <img alt="song_img" className="rounded-2xl" src={song.images?.coverart} />
    </div>
    <div className="mt-2 flex flex-col">
      <p className="font-semibold text-lg text-[#0F1E36] truncate">
        <Link to={`/songs/${song?.key}`}>
       {song.title}
       </Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
      <Link 
      to={song.artists ? 
        `/artists/${song?.artists[0]?.adamid}`
        : '/top-artists'}>
       {song.subtitle}
       </Link>
      </p>
    </div>
    </div>
  )
  }

export default SongCard;
