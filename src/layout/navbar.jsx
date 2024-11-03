import { Outlet } from "react-router-dom";
import inkSpace from "../img/watsap.png";
import { motion } from "framer-motion";

// halaman untuk mengatur navbar
export const NavBar = () => {
  return (
    <>
      {/* halaman untuk mengatur navbar */}
      <div
        className="bg-transparent text-white flex justify-between px-32 py-3 items-center pr-44 shadow-md shadow-black"
        style={{ backgroundSize: "200% 100%" }}
      >
        <div className="flex items-center space-x-6">
          <div className=" h-12 w-12 flex items-center justify-center relative ">
            <img
              src={inkSpace}
              alt=""
              className="absolute transform scale-[2] top-3 w-full h-full object-cover"
            />
          </div>

          <h1 className="font-semibold text-xl font-nunito tracking-[0.6rem]">
            INKSPIRE
          </h1>
        </div>
        {/* tengah */}
        <div className="flex space-x-4">
          <h2>About</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <Outlet />
    </>
  );
};
