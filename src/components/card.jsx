// halaman untuk komponen kartu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export const CardServices = () => {
  return (
    <div className="flex items-center justify-center shadow-2xl shadow-purpleLight">
      <motion.div
        className="max-w-sm bg-gradient-to-t from-white/40 via-white/60 to-purple-800 p-6 min-h-80 rounded-xl"
        initial={{
          opacity: 0,
          y: "1rem",
        }}
        whileInView={{
          opacity: 1,
          y: "0",
        }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center mb-10">
          <FontAwesomeIcon
            icon="fa-solid fa-mobile-screen-button"
            className="text-4xl bg-purpleLight p-3 rounded-xl shadow-lg shadow-purpleCustom"
            aria-label="Mobile Screen Icon"
          />
        </div>
        <h1 className="text-xl font-semibold mb-3 text-center">
          Landing Page Website
        </h1>
        <p className="text-sm text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          neque quisquam id.
        </p>
      </motion.div>
    </div>
  );
};
