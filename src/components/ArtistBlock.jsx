
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from "swiper";

import { useGetTopChartsQuery } from "../redux/services/mixmateMain";

import 'swiper/css'
import 'swiper/css/free-mode'



const ArtistBlock = () => {

  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();

let topPlays;

if (data && data.tracks) {
  topPlays = data.tracks.slice(0, 12);
}
  return (
    <>
    <div className="xl:ml-6 ml-0 xl:mb-6 
    flex-1 xl:max-w[500px] max-w-full flex flex-col">

      <div className="w-full flex flex-col mt-8 box_artist">
      <div className="flex flex-row justify-between items-center">
       <h2 className="text-[#0F1E36] font-Bold text-2xl">Top Artists</h2>
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
          {topPlays?.slice(0, 12).map((artist) => (
            <SwiperSlide
              key={artist?.key}
              style={{ width: '15%', height: 'auto' }}
              className="shadow-lg rounded-full animate-slideright"
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <img src={artist?.images?.background} alt="Name" className="rounded-full w-full object-cover" />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
    </>
  )

}



export default ArtistBlock;
