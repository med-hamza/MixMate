
import {useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/mixmateMain";
import { HiOutlineThumbUp, HiOutlineShare } from 'react-icons/hi';
import 'swiper/css'
import 'swiper/css/free-mode'

const maxLength = 20;
const smax= 27
const maxSecondLen= 60;
const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div>
  <div className={` flex items-center w-full hover:bg-white hover:shadow-xl ${activeSong?.title === song?.title ? 'bg-white shadow-xl' : 'bg-transparent'} py-2 p-4 rounded-lg cursor-pointer mb-2`}>
    <div className="flex1 flex">
    <h3 className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>{i + 1}.</h3>

    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
       
       </div>
       {/* <div className="flex-1 mx-4 sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">
       <HiOutlineThumbUp 
        size={25}
        className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}
       />
       </div> */}
       <div className="flex mx-4 sm:flex md:flex lg:hidden xl:hidden ">
        <img className="w-10 h-10 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
       </div>
      <div className="flex-auto w-32 ml-5">
        <Link to={`/songs/${song.key}`}>
          <p className={`text-xl  ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36]  mr-5 `}>
            {song?.title.length > maxLength ? song?.title.substring(0, maxLength) + "..." : song?.title}
          </p>
        </Link>
        </div>
        <div className=" mx-3 flex-1  flex justify-start sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">
        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}>
          {song?.subtitle}
          </p>
        </Link>
        </div>
        <div className="mx-3 justify-start flex flex-1 sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">
         <img src={song?.hub.image} alt="MixMate picture apple" className="w-16 bg-black rounded-2xl p-2" />

        </div>
        <div className=" mx-0 flex-auto w-64 sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">
          <p className={`text-base   ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}>
            {song?.share.subject.length > maxSecondLen ? song?.share.subject.substring(0, maxSecondLen) + "..." : song?.share.subject}
          </p>
        </div>

        <div className="flex-1 justify-end flex sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">
        <a href={`${song?.share.href}`} className="text-right" target="blank">
          <HiOutlineShare 
          size={25}
          className={` ${activeSong?.title === song?.title ? 'opacity-1' : 'opacity-50 '}  text-[#0F1E36] `}
          /> 
          </a>

        </div>
    </div>

  </div>
);

const ChartMobile=({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick}) => (
  <div className="top_small_chart flex sm:hidden flex-row items-center mt-7">
    <div>
  <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
  </div>
  <div className="ml-5">
  <Link to={`/songs/${song.key}`}>
          <p className={`text-xl  font-normal text-[#0F1E36]  mr-5 `}>
            {song?.title.length > smax ? song?.title.substring(0, smax) + "..." : song?.title}
          </p>
        </Link>
  <Link to={`/artists/${song?.artists[0].adamid}`}>
            <p className={`text-base  text-[#545663] `}>
            {song?.subtitle}
            </p>
          </Link>
          </div>
  </div>
)

const TopPlay = () => {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();


let topPlays;

if (data && data.tracks) {
  topPlays = data.tracks.slice(0, 5);
}

  const handlePauseClick = () => {
    dispatch(playPause(false));

  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <>
    <div className="list-charts xl:ml-6 ml-0 xl:mb-6 
    flex-1 xl:max-w[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col pb-20">
      <div className="flex flex-row justify-between items-center">
       <h2 className="font-bold text-3xl text-[#0F1E36] text-left">Top Tracks</h2>
        <Link to="/top-charts">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>
       <div className="mt-4 flex flex-col gap-1">
        <div className="flex  items-center w-full py-2 p-4 mb-4">
        <div className="flex-2 w-14">
         <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">  #</p>
        </div>
        
        <div className="mx-3 flex-auto w-32 ">
        <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px] ml-2">  Song</p>
        </div>
        <div className=" mx-3 flex-1  flex justify-start">
        <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">  Artist</p>
        </div>
        <div className="mx-3 justify-start flex flex-1">
        <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:hidden xl:flex hidden max-w-[500px]">  Type</p>
        </div>
        <div className=" mx-0 flex-auto w-64">
        <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">  Subject</p>
        </div>
          <div className="flex-1 justify-end flex  ">
          <p className="text-[#0F1E36] text-base	font-bold sm:hidden md:hidden lg:flex xl:flex hidden max-w-[500px]">  Share</p>
          </div>
        </div>
       {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          ))}
         
      </div>
      </div>

      {/* <div className="w-full flex flex-col mt-8 box_artist">
      <div className="flex flex-row justify-between items-center">
       <h2 className="text-[#c5c6c6] font-Bold text-2xl">Top Artists</h2>
        <Link to="/top-artists">
        <p className="text-gray-300 text-base cursor-pointer">See more</p>
        </Link>
      </div>
      <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className="mt-4"
        >
          {topPlays?.slice(0, 8).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '25%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

    </div>
    <div>
    <h2 className="flex sm:hidden font-bold text-3xl text-[#0F1E36] text-left">Top Tracks</h2>
    {topPlays?.map((song,i) =>(
          <ChartMobile
          key={song.key}
          song={song}
          i={i}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={() => handlePlayClick(song, i)}
        />
          )) }
     </div>
   
    </>
  )

}

export default TopPlay;
