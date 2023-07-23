import "../styles/Upload.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import URL from "../constants/constants";
export default function Upload() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
  };

  const handleSubmit = () => {
    if (uploadedImage) {
      // console.log("Working!");
      const formData = new FormData();
      formData.append("image", uploadedImage);

      axios
        .post(`${URL}/check`, formData)
        .then((response) => {
          setPrediction(response.data.prediction);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  const handleSeeOptions = () => {
    if (uploadedImage) {
      if (prediction === "Recyclable") {
        navigate("/middle", { state: { image: uploadedImage } });
      } else {
        navigate("/middle", { state: { image: uploadedImage } });
      }
    }
  };
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
          onChange={handleImageChange}
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
        <button
          className="select-image"
          style={{ marginTop: "1rem" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {prediction ? (
        <div className="content-part">
          {prediction === "Recyclable" ? (
            <>
              <h1>Congratulations!</h1>
              <h2>The product you have uploaded is recyclable.</h2>
              <h3>Thank you for making an environmental choice.</h3>
              <button className="see-options" onClick={handleSeeOptions}>
                See disposing options
              </button>
            </>
          ) : (
            <>
              <h1>Sorry!</h1>
              <h2>The product you have uploaded is not recyclable.</h2>
              <button className="see-options" onClick={handleSeeOptions}>
                See disposing options
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="content-part">
          <h1>Upload an Image to get started</h1>
        </div>
      )}
    </div>
  );
}
