// halaman untuk bagian homepage

import Flip from "../components/Flip";
import inkspire from "../img/logoss.png";

export const HomePage = () => {
  return (
    <>
      <div className="mt-16 max-w-[105rem] mx-auto">
        <div className="flex justify-between ">
          <div className="">
            <h1 className="text-xl font-nunito font-bold">I am Royan</h1>
            <div className="cursor-pointer tracking-[0.5rem]">
              {["web", "developer"].map((item) => (
                <Flip key={item}>{item}</Flip>
              ))}
            </div>
            <div className="w-[40rem] mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                temporibus laboriosam enim, quis eaque animi aliquam laudantium
                cupiditate laborum dolores!
              </p>
            </div>
          </div>
          <div className="bg-black h-80 w-72">logos</div>
        </div>
      </div>
    </>
  );
};
