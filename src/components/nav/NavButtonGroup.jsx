import { useState } from "react";

function NavButtonGroup() {
  const [active, setActive] = useState("delivery");
  return (
    <div className="btn-group bg-[#3a3c49] w-fit rounded-lg">
      <button
        onClick={() => setActive("delivery")}
        className={`py-1 px-3 rounded-lg md:w-28 ${
          active === "delivery" ? "text-[#3a3c49] bg-white" : ""
        } duration-200`}
      >
        Delivery
      </button>
      <button
        onClick={() => setActive("pickup")}
        className={`py-1 px-3 rounded-lg md:w-28 ${
          active === "pickup" ? "text-[#3a3c49] bg-white" : ""
        } duration-200`}
      >
        PickUp
      </button>
    </div>
  );
}

export default NavButtonGroup;
