import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/8b3c229d-391e-4f71-b985-b8c7e479eb86/files/f6a2e90c-cb66-4848-b2a9-0f73e333eb2f.jpg"
          alt="Красочный образовательный мир"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-purple-800/30 to-indigo-900/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-yellow-300 uppercase tracking-widest text-sm md:text-base mb-4 font-semibold">
            Приложение для 1–4 класса
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
            УЧИСЬ<br />ИГРАЯ
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10 leading-relaxed">
            Интерактивные вопросы и задания, которые превращают учёбу в увлекательное приключение для младших школьников
          </p>
          <button className="bg-yellow-400 text-purple-900 font-bold px-8 py-4 text-base uppercase tracking-wide rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
            Скачать бесплатно
          </button>
        </motion.div>
      </div>
    </div>
  );
}
