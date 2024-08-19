import CatalogIcon from "./CatalogIcon";
import HeaderButtonContainer from "./HeaderButtonContainer";

import { RiCloseLargeFill } from "react-icons/ri";

function SideBar({ active = true, onOutClick }) {
  return (
    <>
      <div
        className={`top-0 left-0 fixed h-screen w-screen ${
          active ? "opacity-35 bg-black" : "pointer-events-none"
        }`}
        onClick={onOutClick}
      ></div>
      <div
        className={`fixed bg-white right-0 top-0 h-screen ${
          active ? "" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b flex justify-between items-center">
          <span>Menu</span>
          <button onClick={onOutClick}>
            <RiCloseLargeFill />
          </button>
        </div>
        <div className="p-4 flex flex-col items-start gap-4">
          <button className="bg-primary flex text-white gap-2 items-center justify-center py-2 px-7 rounded-md flex-shrink-0">
            <CatalogIcon /> Catalog
          </button>

          <div className="flex justify-around self-stretch gap-1">
            <HeaderButtonContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
