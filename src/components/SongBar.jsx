import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineThumbUp, HiOutlineShare } from 'react-icons/hi';
import PlayPause from './PlayPause';

const maxLength = 20;
const maxSecondLen= 55;
const smax=25;

const SongBar = ({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <>  
  <div className={`list-charts flex  mb-8 items-center w-full hover:bg-white hover:shadow-xl ${activeSong?.title === song?.title ? 'bg-white shadow-xl' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <div className="flex1 flex">
    <h3 className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>{i + 1}.</h3>
    {!artistId
      ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      )
      : null}
    </div>
    <div className="mx-3 flex-auto w-32 ">


      {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className={`text-xl  ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>
              {song?.title.length > maxLength ? song?.title.substring(0, maxLength) + "..." : song?.title}
            </p>
          </Link>
        ) : (
          <p className={`text-xl  ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>
            {song?.attributes?.name.length > maxLength ? song?.attributes?.name.substring(0, maxLength) + "..." : song?.attributes?.name}
          </p>
        )}
    
   
      </div>
      <div className=" mx-3 flex-auto w-32 justify-start">
        <Link to="">
          <p className={`text-xl  ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>
          {song?.subtitle.length> maxLength ? song?.subtitle.substring(0, maxLength)+ "..." : song?.subtitle }
          </p>
        </Link>
        </div>
   
        <div className=" mx-0 flex-auto w-64">
          <p className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}>
            {song?.share.subject.length> maxSecondLen  ? song?.share.subject.substring(0, maxSecondLen) + "..." : song?.share.subject 
            }
          </p>
        </div>
        <div className="flex-1 justify-end flex ">
        <a href={`${song?.share.href}`} className="text-right" target="blank">
          <HiOutlineShare 
          size={25}
          className={` ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}
          /> 
          </a>

        </div>
   
  </div>
  <div className="top_small_chart flex sm:hidden flex-row items-center mb-7">
    <div>
  <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
  </div>
  <div className="ml-5">
  {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <p className="text-xl  font-normal text-[#0F1E36]  mr-5  ">
              {song?.title.length > smax ? song?.title.substring(0, smax) + "..." : song?.title}
            </p>
          </Link>
        ) : (
          <p className="text-xl  font-normal text-[#0F1E36]  mr-5  ">
            {song?.attributes?.name.length > smax ? song?.attributes?.name.substring(0, smax) + "..." : song?.attributes?.name}
          </p>
        )}
        <Link to="">
          <p className={`text-base  text-[#545663]  mr-5 `}>
          {song?.subtitle.length> smax ? song?.subtitle.substring(0, smax)+ "..." : song?.subtitle }
          </p>
        </Link>
          </div>
  </div>
  </>

);

export default SongBar;