import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { useParams } from 'react-router-dom';
import { TopPlay } from '../components';
import { useGetSearchSongQuery } from '../redux/services/mixmateMain';

const Search = () => {


  const {searchTerm} = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSearchSongQuery({searchTerm} );



  const songs = data?.tracks?.hits?.map((song)=> song.track)
 
  if (isFetching ) return <Loader title="searching Songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col px-6">
      <h2 className="font-bold text-3xl text-[#0F1E36] text-left mt-4 ml-3 mb-5">Showing results for<span className='font-black'> {searchTerm}  </span> </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {songs
        ?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
      <div className="relative top-0 h-fit w-full mt-4">
        <TopPlay />
      </div>
    </div>
  );
};

export default Search;