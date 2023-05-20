
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/mixmateMain";

//import  CoverSlider from '../components/CoverSlider';
import slide from "../assets/slide.png"
 

import { TopPlay } from '../components';
const Discover = () => {



  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "pop";


  if (isFetching) return <Loader title="Loading songs...." />

  if (error) return <Error />

  return (
    <div className="flex flex-col section_discover">
      <div className="w-full">
        <img src={slide} alt="mixmate" className="w-full" />
      </div>
      <div className="px-6 bg-gradient-to-b from-transparent
    to-[#F4F9FF]">
      <div className="w-full flex justify-between items-center 
        sm:flex-row flex-col mt-10 mb-4 ">
        <h2 className="font-bold text-3xl text-[#0F1E36] text-left">
          Featured Tracks
        </h2>
      </div>
      <div className="flex-wrap flex sm:justify-start justify-center gap-3">
          {data.tracks
            ?.map((song, i) => (
             
                <SongCard
                  key={song.key}
                  song={song}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  i={i}
                  data={data}
                />
             
            ))}
            </div>
    
      <div className="relative top-0 h-fit w-full mt-4">
        <TopPlay />
      </div>
      </div>
    </div>
  )

}



export default Discover;
