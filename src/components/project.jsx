// halaman untuk project
import agentOne from "../img/1pro.png";

export const ProjectView = () => {
  return (
    <>
      <div className="flex ">
        <div className="relative mt-5 group cursor-pointer">
          <img
            src={agentOne}
            alt=""
            className="w-[40rem] h-[35rem] transition-opacity duration-300 group-hover:opacity-50 "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 object-cover">
            <p className="text-white text-2xl">Tulisan yang Muncul</p>
          </div>
        </div>
        <div className="relative mt-5 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[40rem] h-[35rem] transition-opacity duration-300 group-hover:opacity-50 "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-2xl">Tulisan yang Muncul</p>
          </div>
        </div>
        <div className="relative mt-5 group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1483817101829-339b08e8d83f?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[40rem] h-[35rem] transition-opacity duration-300 group-hover:opacity-50 "
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-2xl">Tulisan yang Muncul</p>
          </div>
        </div>
      </div>
    </>
  );
};
