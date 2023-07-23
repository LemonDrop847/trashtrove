import { useNavigate } from "react-router-dom";

export default function Back() {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate("/")}>
      <img
        src="https://i.postimg.cc/fy1xxDN7/back.png"
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
          width: "3rem",
          height: "3rem",
          borderRadius: "100%",
          border: "2px solid black",
          padding: "0.3rem",
        }}
        alt=""
      />
    </button>
  );
}
