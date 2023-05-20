import { Link } from "react-router-dom";
const DetailsHeader = ({artistId, artistData, songData }) => {
  
  const  artist = artistData?.artists[artistId]?.attributes
  return (
  
  
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent
    to-black sm:h-48 -28">
     <div className="absolute inset-0 flex items-center">
     <img
        alt="profile"
        src={
          artistId ? artist.artwork?.url
            .replace('{w}', '500')
            .replace('{h}', '500')
            : songData?.images?.coverart
            }
        className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black"
      />

      <div className="ml-5">
          <h3 className="sm:text-3xl text-xl text-white font-bold" > {songData?.title} </h3>
          <h4 className="sm:text-2xl text-xl text-white font-bold">  {artistId
            ? artistData?.attributes?.genreNames[0]
            : songData?.genres?.primary}</h4>
        <p className="text-white font-semi-bold sm:text-2xl text-xl"> {artistId ? artist.name :songData?.subtitle} </p>
        {!artistId && (
          <Link to={`/artists/${songData?.artists[0]?.adamid}`}>
            <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
          </Link>
        )}
      </div>
     </div>

    </div>
    <div className="w-full sm:h-30 h-24" />
    </div>
    )
}

export default DetailsHeader;
