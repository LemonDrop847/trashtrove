import "../styles/Display.css";
import { Typewriter } from "react-simple-typewriter";
import { useLocation } from "react-router-dom";

export default function Display() {
  const location = useLocation(); 
  const text = location.state?.text;
  console.log(text)
  return (
    <div className="whole">
      <h1 className="heading-opt"> Here is what you can do ♻️</h1>
      <div className="holder" id="txt-holder">
        <Typewriter
          words={[text]}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          delaySpeed={10}
        />
      </div>
    </div>
  );
}