import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="h-full flex items-center justify-start">
    <div className='w-[240px] flex px-2 bg-[#F51E38] h-full items-center'>
    <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
    </div>
    <div className="w-[100%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="truncate text-[#F69DA8]">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
    </div>
  </div>
);

export default Track;
