
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";


const Searchbar = () => {

   const navigate = useNavigate();

   const [searchTerm , setSearchTerm] = useState('');

   const handelSubmit= (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
   }

  return (
    <form onSubmit={handelSubmit} autoComplete="off" className="p-2 text-gray-400">

      <label htmlFor="search-field" className="sr-only">

        Search all song
      </label>
      <div className="flex flex-row justify-start  items-center border-2 border-[#dbdbdb] rounded-3xl bg-white" >
      <HiOutlineSearch className="w-5 h-6 ml-4" />
      <input type="search"
        name="search-field"
        autoComplete="off"
        placeholder="Search your favorite music"
        id="search-field"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 bg-transparent border-none
 outline-none placeholder-gray-500 text-base text-[#c5c6c6] p-3"
      />
      </div>
    </form>

  )
}

export default Searchbar;
