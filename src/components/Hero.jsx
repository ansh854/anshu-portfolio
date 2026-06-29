function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <div>

          <p className="text-cyan-400 text-lg">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl font-bold text-white mt-4">
            Anshu Kumawat
          </h1>

          <h2 className="text-3xl text-slate-300 mt-5">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 mt-8 leading-8 max-w-xl">
            Passionate about building modern web applications,
            creative UI/UX and railway technology solutions.
          </p>

          <div className="mt-10 flex gap-5">

            <button className="bg-cyan-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
              Hire Me
            </button>

            <button className="border border-cyan-500 px-8 py-4 rounded-xl text-cyan-400 hover:bg-cyan-500 hover:text-white transition">
              View Projects
            </button>

          </div>

        </div>

        <div className="flex justify-center">

          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 blur-3xl opacity-30 absolute"></div>

          <div className="relative w-80 h-80 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center">

            <span className="text-7xl">
              👨‍💻
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;