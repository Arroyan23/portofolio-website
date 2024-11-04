// halaman untuk bagian homepage

import Flip from "../components/Flip";
import inkspire from "../img/logoss.png";
import HorizontalScroll from "../components/HorizontalScroll";
import { Hero } from "../components/div";
import Marquee from "../components/Marquee";
export const HomePage = () => {
  return (
    <>
      <div className=" max-w-[105rem] mx-auto">
        {/* hero section */}
        <Hero />
        <div class="absolute -top-36 w-80 left-1/3 h-80 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute -top-36 z-10 left-[58rem] w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute -top-36 z-10 left-[47rem] w-80 h-80 bg-sky-600 rounded-full blur-3xl opacity-50"></div>
        {/* halaman horizontal scroll */}
        <div className="mt-0">
          <h1>My Project</h1>
          <Marquee />
        </div>
      </div>
    </>
  );
};
