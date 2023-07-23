import "../styles/Upload.css";
import { useNavigate } from "react-router";
export default function Upload() {
  const navigate = useNavigate();
  return (
    <div className="body">
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
      <div className="container1 d-flex justify-content-center flex-column align-items-center">
        <input type="file" id="file" accept="image/*" hidden />
        <div className="img-area1" data-img="">
          <i className="bx bxs-cloud-upload icon"></i>
          <h3>Upload Image</h3>
          <p>
            Image size must be less than <span>2MB</span>
          </p>
        </div>
        <input
          type="file"
          name="file-input"
          id="file-input"
          className="select-image"
          style={{ overflow: "hidden" }}
          // id="img"
        />
        {/* <label
          className="select-image"
          id="select-image"
          htmlFor="file-input"
          // value={file}
          // onChange={(e) => setFile(e.target.value)}
        >
          Select a File
        </label> */}
        <button className="select-image" style={{ marginTop: "1rem" }}>
          Submit
        </button>
      </div>

      <div className="content-part">
        <h1>
          {" "}
          Congratulations! <br />{" "}
        </h1>
        <h2> The product you've uploaded is recyclable. </h2>
        <h3> Thank you for making an environmental choice. </h3>
        <button className="see-options">See recycling options</button>
      </div>
    </div>
  );
}
