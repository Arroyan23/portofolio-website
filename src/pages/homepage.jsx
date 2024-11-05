// halaman untuk bagian homepage
import { CardServices } from "../components/card";
import { Hero } from "../components/div";
import Marquee from "../components/Marquee";
import PageScroll from "../components/PageScroll";
export const HomePage = () => {
  return (
    <>
      <div className=" max-w-[105rem] mx-auto">
        {/* hero section */}
        <div className=" flex min-h-screen justify-center  max-w-7xl mx-auto pt-20 pb-8">
          <div className="grid place-items-center w-full rounded-2xl max-h-xl ">
            <div className=" ">
              <Hero />
            </div>
          </div>
        </div>
        <div class="absolute -top-36 w-80 left-1/3 h-80 bg-purple-800 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute -top-36 z-10 left-[58rem] w-80 h-80 bg-purple-600 rounded-full blur-3xl opacity-50"></div>
        <div class="absolute -top-36 z-10 left-[47rem] w-80 h-80 bg-sky-600 rounded-full blur-3xl opacity-50"></div>
        <div className="mt-10 max-w-5xl mx-auto">
          <PageScroll />
        </div>
        {/* halaman horizontal scroll */}
        <div className="relative mt-0 max-w-4xl mx-auto p-10 bg-purpleCustom/50 backdrop-blur-xl rounded-lg border border-white/20 shadow-lg shadow-slate-900">
          {/* Overlay vignette di bagian bawah dengan gradasi ungu-putih */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-white/20 to-transparent rounded-lg"></div>

          {/* Konten di atas vignette */}
          <div className="relative z-10 text-center text-white">
            <h1 className="text-2xl font-bold mb-5">Our Abilities</h1>
            <Marquee />
          </div>
        </div>
        {/* halaman layanan yang di tawarkan */}
        <div className="max-w-5xl mx-auto mt-20">
          <h1>Our Services</h1>
          {/* halaman untuk kartu */}
          <div className="flex space-x-5">
            <CardServices />
            <CardServices />
            <CardServices />
          </div>
        </div>
      </div>
    </>
  );
};
