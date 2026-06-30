import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center"
    >
      <p className="text-cyan-400 text-xl font-medium mb-5">
        👋 Hello, I'm
      </p>

      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1]">
        <span className="text-white">Anshu</span>
        <br />
        <span className="text-cyan-400">Kumawat</span>
      </h1>

      <div className="mt-6 h-10 text-2xl font-semibold text-slate-300">
        <Typewriter
          words={[
            "Full Stack Developer",
            "React Developer",
            "Java Developer",
            "Railway Tech Enthusiast",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1700}
        />
      </div>

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
        Passionate about creating modern web applications,
        solving real-world problems and building innovative
        railway technology solutions.
      </p>

      {/* Buttons */}

      <div className="flex flex-wrap gap-5 mt-10">

        <button className="px-9 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 shadow-xl shadow-cyan-500/40 text-white font-semibold">
          🚀 Hire Me
        </button>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="px-9 py-4 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
        >
          Download Resume
        </a>

      </div>

      {/* Social */}

      <div className="flex gap-5 mt-10">

        <a
          href="https://github.com/ansh854"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:-translate-y-2"
        >
          <FaGithub size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/anshu-kumawat-a8a821293/"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:-translate-y-2"
        >
          <FaLinkedin size={24} />
        </a>

        <a
          href="mailto:kumawatanshu45@gmail.com"
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 hover:-translate-y-2"
        >
          <FaEnvelope size={22} />
        </a>

      </div>

    </motion.div>
  );
}

export default HeroContent; 