
import { FaPause  , FaPlay } from 'react-icons/fa';
const PlayPause = ({handlePause,handlePlay, song,activeSong,isPlaying} ) => (

  isPlaying && activeSong?.title === song.title ? (
    <FaPause 
    size={25}
    className='text-[#0F1E36] opacity-50'
    onClick={handlePause}/>
  ) : (
  <FaPlay 
  size={25}
  className='text-[#0F1E36] opacity-50'
  onClick={handlePlay}/>
  )
);

export default PlayPause;
