import { MdKeyboardArrowDown } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <div className="bg-primary h-full p-1 rounded-md flex justify-center items-center ">
      <div className="h-full flex-grow rounded-md flex">
        <Select />

        <div className="h-full bg-white flex justify-center items-center">
          <div className="h-[80%]  w-[1px] bg-gray-300"></div>
        </div>

        <input
          className="h-full rounded-r-md focus:outline-none placeholder:text-gray-300 pl-3 font-[500] text-siteblack flex-grow"
          placeholder="Search in the market"
        />
      </div>
      <div className="px-3">
        <FiSearch className="text-2xl text-white" />
      </div>
    </div>
  );
}

function Select() {
  return (
    <div className="flex bg-white px-3 items-center justify-center rounded-l-md">
      <select className="h-full uppercase text-siteblack bg-white  font-[500] appearance-none outline-none">
        <option>All Categories</option>
      </select>
      <MdKeyboardArrowDown className="text-xl ml-2 text-gray-500" />
    </div>
  );
}

export default SearchBar;
