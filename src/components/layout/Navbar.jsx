import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-10 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-4">

          <img
            src={logo}
            alt="AK Logo"
            className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/30"
          />

          <div>

            <h1 className="text-xl font-bold text-white tracking-wide">
              Anshu Kumawat
            </h1>

            <p className="text-sm text-cyan-400">
              Full Stack Developer
            </p>

          </div>

        </a>

        {/* Menu */}

        <nav className="hidden md:flex items-center gap-8">

          <a
            href="#home"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            About
          </a>

          <a
            href="#experience"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-cyan-400 transition duration-300"
          >
            Contact
          </a>

        </nav>

        {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition duration-300 shadow-lg shadow-cyan-500/30"
        >
          Resume
        </a>

      </div>
    </header>
  );
}

export default Navbar;