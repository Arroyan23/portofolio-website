import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
  "https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4MHwwfDF8c2VhcmNofDV8fGFic3RyYWN0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1529243856184-fd5465488984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwyMDg4MHwwfDF8c2VhcmNofDJ8fGFic3RyYWN0fGVufDB8fHw&ixlib=rb-1.2.1&q=80&w=1080",
];

const HorizontalScroll = () => {
  return (
    <div className="">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative min-h-[150vh] ">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${card})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-opacity duration-300 group-hover:opacity-30"
      ></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-2xl font-bold text-white">Your Text Here</p>
      </div>
    </div>
  );
};

export default HorizontalScroll;
