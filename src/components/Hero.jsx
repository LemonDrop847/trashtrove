import { Link } from "react-router-dom";
import videobg from "../assets/bgvideo.mp4";
import "../styles/Home.css";
export default function Hero() {
  return (
    <section className="start-video">
      <div className="start-video__overlay"></div>
      <video src={videobg} autoPlay loop muted />

      <div className="start-video__content h-100 container-custom position-absolute video-content">
        <div className="d-flex h-100 align-items-center start-video__content-width">
          <div className="text-white">
            <h1 className="start-video__heading fw-bold mb-4">
              Waste Wise, Recycling Smart!
            </h1>
            <p className="lead mb-4">Where Waste Reshapes Our World</p>
            <Link to="/upload" className="mt-2 btn btn-lg btn-outline-light">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
