import { Typewriter } from "react-simple-typewriter";

function TypingText() {
  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mt-6 h-10">
      <Typewriter
        words={[
          "Full Stack Developer",
          "React Developer",
          "Railway Tech Enthusiast",
          "Java Developer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={50}
        delaySpeed={1800}
      />
    </h2>
  );
}

export default TypingText;