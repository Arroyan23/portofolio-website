// halaman untuk header
import { motion, AnimatePresence } from "framer-motion";
import Flip from "./Flip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons"; // Import ikon yang dibutuhkan

const heroVariants = {
  initial: { opacity: 0, y: -50 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: 50 },
};

const transition = {
  duration: 1,
};

export const Hero = () => {
  return (
    <AnimatePresence>
      <motion.div
        key="hero" // Gunakan key untuk memicu animasi setiap kali komponen ini dimuat
        initial="initial"
        animate="in"
        exit="out"
        variants={heroVariants}
        transition={transition}
        className=""
      >
        <div className="flex justify-center">
          <div>
            <h1 className="text-xl font-nunito font-bold text-center">
              We Are
            </h1>
            <div className="cursor-pointer tracking-[0.5rem] text-center">
              {["inkspire"].map((item) => (
                <Flip key={item}>{item}</Flip>
              ))}
            </div>
            <div className="w-[40rem] mt-5 text-center">
              <p className="text-xl font-semibold">
                Transforming Ideas into High-Impact Digital Products
              </p>
            </div>
            {/* untuk icon logo */}
            <div className="flex my-4 justify-between">
              <div className="flex space-x-4 items-center">
                <div className="bg-purpleCustom w-7 h-7 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                </div>
                <div>
                  <p>Planning</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="bg-purpleCustom w-7 h-7 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                </div>
                <div>
                  <p>Development</p>
                </div>
              </div>
              <div className="flex space-x-4 items-center">
                <div className="bg-purpleCustom w-7 h-7 rounded-full flex items-center justify-center">
                  <FontAwesomeIcon icon={faCheck} className="text-white" />
                </div>
                <div>
                  <p>Deployment</p>
                </div>
              </div>
            </div>
            <div className="mt-7 z-30 flex justify-center">
              {/* halaman untuk button */}
              <motion.div className="text-white ">
                <motion.button
                  className="bg-purple-600 py-3 px-5 rounded-xl"
                  initial={{ scale: 1, rotate: 0 }}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  whileTap={{ scale: 0.9, rotate: -10 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  Download CV
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
