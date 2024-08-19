import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";

import HeaderButton from "./HeaderButton";
function HeaderButtonContainer() {
  return (
    <>
      <HeaderButton Icon={FiPackage} />
      <HeaderButton Icon={FaRegHeart} />
      <HeaderButton Icon={FiShoppingCart} />
      <HeaderButton Icon={FiUser} />
    </>
  );
}

export default HeaderButtonContainer;
