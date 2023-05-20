import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer} from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="relative flex  bg-white">
    <Sidebar />
    <div className="flex-1 flex flex-col  ">
      <div className='flex items-center justify-center  border-b-2 border-[#EEEEEE] pl-7 pr-10 pt-2 pb-2'>
      <Searchbar />
      </div>
     
      

       <div className="h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar">
       
          <div className="flex-2 h-fit">
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-[#0F1E36] z-10">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
