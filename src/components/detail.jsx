// halaman untuk detail pada cards
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const DetailExp = ({ heading }) => {
  return (
    <>
      {/* halaman penjelasan skill */}
      <motion.div
        className="max-w-lg flex items-center space-x-4"
        initial={{ opacity: 0, y: 50 }} // Mulai dengan opacity 0 dan sedikit di bawah posisi awal (y: 50)
        animate={{ opacity: 1, y: 0 }} // Animasi ke opacity 1 dan y ke posisi semula (y: 0)
        transition={{ duration: 0.8 }} // Durasi animasi dalam detik
      >
        <div className="">
          <FontAwesomeIcon className="text-9xl" icon="fa-solid fa-leaf" />
        </div>
        {/* halaman teks */}
        <div className="">
          <h1 className="text-3xl font-bold">{heading}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor ab
            suscipit dolores dolorum, possimus incidunt et laudantium doloribus
            quos! Expedita.
          </p>
          <button>Learn More</button>
        </div>
      </motion.div>
    </>
  );
};
