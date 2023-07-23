import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      <img
        src="https://i.postimg.cc/bwNbQ9Nm/arrow2flip.png"
        className="back"
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
        alt=""
      />
    </button>
  );
}
