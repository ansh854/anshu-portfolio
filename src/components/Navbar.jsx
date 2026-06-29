function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/5 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <h1 className="text-2xl font-bold text-cyan-400">
          A<span className="text-white">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>

      </div>
    </header>
  );
}

export default Navbar;