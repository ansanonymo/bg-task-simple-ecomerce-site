import NavButtonGroup from "./NavButtonGroup";
import { LuPencilLine } from "react-icons/lu";

function Nav() {
  return (
    <nav className="w-full py-3 px-3 bg-siteblack text-white font-semibold text-xs">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <LeftPart />
        <span className="hidden lg:flex items-center">
          +8 800 555-35-35
          <span className="text-[#454755]">Around the clock</span>
        </span>
      </div>
    </nav>
  );
}

function LeftPart() {
  return (
    <div className="flex flex-wrap items-center gap-4 md:gap-5 lg:gap-7 w-full lg:w-fit justify-between s360:gap-2 flex-col s360:flex-row">
      <NavButtonGroup />
      <span className="flex flex-wrap items-center gap-2">
        Select delivery address <LuPencilLine className="text-xl" />
      </span>
      <span className="text-[#454755] hidden md:block">
        Nearest delivery{" "}
        <span className="text-white">today is 13:00-14:00</span>
      </span>
    </div>
  );
}

export default Nav;
