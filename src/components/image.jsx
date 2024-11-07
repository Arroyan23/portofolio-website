// halaman untuk di sebelah our abilities
import ImageTransparent from "../img/removedcon.png";

export const ImageCard = () => {
  return (
    <>
      <div className="bg-slate-800 text-white shadow-xl shadow-slate-950 max-w-5xl min-h-[30rem] rounded-tr-xl rounded-br-xl flex justify-between items-center">
        <div className="max-w-md ml-6">
          <h1 className="text-4xl font-nunito font-semibold mb-5">
            We Support Fullstack Development
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, autem laudantium expedita ea facere aspernatur
            voluptate at voluptatem nesciunt iste ut molestiae amet eius sunt
            libero sint? Itaque, consequatur nisi?
          </p>
        </div>
        <div className="">
          <img src={ImageTransparent} alt="" className="h-96 w-96" />
        </div>
      </div>
    </>
  );
};
