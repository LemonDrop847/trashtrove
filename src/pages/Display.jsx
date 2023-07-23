import "../styles/Display.css";
import { Typewriter } from "react-simple-typewriter";

export default function Display() {
  return (
    <div className="whole">
      <h1 className="heading-opt"> Here is what you can do ♻️</h1>
      <div className="holder" id="txt-holder">
        <Typewriter
          words={[
            "We've analyzed the product you uploaded and confirmed that it is made of plastic. Plastic recycling plays a crucial role in reducing waste and conserving valuable resources, so we're excited to guide you through the various ways you can recycle it responsibly. 1) CURBSIDE RECYCLING: Check with your local recycling program to see if they accept this type of plastic. Many municipalities have curbside recycling services that make it easy to dispose of recyclable plastics at home. 2) DROP-OFF RECYCLING CENTRES: Look for recycling centers or collection points in your area that specifically handle plastic items. These centers are dedicated to recycling various types of plastics and ensure they are processed correctly. 3) ECOBRICK INITIATIVES: If the plastic product is not recyclable through traditional means, consider participating in eco-brick initiatives. Eco-bricks are made by stuffing non-recyclable plastics into plastic bottles, creating building blocks for sustainable construction projects. 4) MAIL-IN RECYCLING PROGRAMS: Some companies and organizations offer mail-in recycling programs for specific plastic products. You can send the item to them for proper recycling. 5) DONATION OR REPURPOSING: If your plastic product is still in good condition, consider donating it to local organizations or charities that can find alternative uses for it.We've analyzed the product you uploaded and confirmed that it is made of plastic. Plastic recycling plays a crucial role in reducing waste and conserving valuable resources, so we're excited to guide you through the various ways you can recycle it responsibly.",
          ]}
          cursor
          cursorStyle="|"
          typeSpeed={10}
          delaySpeed={10}
        />
      </div>
    </div>
  );
}
