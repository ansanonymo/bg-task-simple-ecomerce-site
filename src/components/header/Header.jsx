import Logo from "./../../assets/logo.png";
import CatalogIcon from "./CatalogIcon";
import HeaderButtonContainer from "./HeaderButtonContainer";
import SearchBar from "./SearchBar";
import { FiMenu } from "react-icons/fi";
import SideBar from "./SideBar";
import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <header className="font-semibold border-b-2 border-b-gray-100">
      <div className="container mx-auto flex my-6 gap-6 items-stretch justify-between lg:justify-start">
        <div className="flex-shrink-0">
          <img src={Logo} alt="logo" className="w-20" />
        </div>

        <button className="bg-primary hidden  text-white lg:flex gap-2 items-center justify-center py-2 px-9 rounded-md flex-shrink-0">
          <CatalogIcon /> Catalog
        </button>

        <div className="hidden lg:block flex-grow">
          <SearchBar />
        </div>

        <div className="hidden lg:flex gap-3 flex-shrink-0">
          <HeaderButtonContainer />
        </div>

        <button
          onClick={() => setShow(true)}
          className="lg:hidden text-2xl text-primary flex justify-center items-center cursor-pointer"
        >
          <FiMenu />
        </button>
      </div>
      <SideBar active={show} onOutClick={() => setShow(false)} />
    </header>
  );
}

export default Header;
