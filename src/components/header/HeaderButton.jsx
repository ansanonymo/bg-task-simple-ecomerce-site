import { BsBoxSeam } from "react-icons/bs";

function HeaderButton({ Icon = BsBoxSeam }) {
  return (
    <div className="size-12 flex justify-center items-center border border-gray-200 rounded-md cursor-pointer hover:bg-primary group duration-75 flex-wrap">
      <span className="text-xl text-siteblack group-hover:text-white duration-75">
        <Icon className="duration-75" />
      </span>
    </div>
  );
}

export default HeaderButton;
