import "../styles/Upload.css";
import { useNavigate } from "react-router";
import axios from "axios";
import { useState } from "react";
import URL from "../constants/constants";
import Back from "../components/Back";

export default function Upload() {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setUploadedImage(file);
  };

  const handleSubmit = async () => {
    if (uploadedImage) {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append("image", uploadedImage);
        const response = await axios.post(`${URL}/check`, formData);
        setPrediction(response.data.prediction);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const detectObjects = async (ways) => {
    try {
      const formData = new FormData();
      formData.append("image", uploadedImage);
      console.log(uploadedImage);
      const response = await axios.post(`${URL}/detect`, formData);
      console.log(response);
      console.log("Prediction:", response.data.prediction);
      const items=response.data.prediction;
      const obj = items && items.join(", ");
      console.log(items, obj);

      const apiEndpoint =
        ways === 0 ? `${URL}/recycleways` : `${URL}/disposeways`;
      const finalResponse = await axios.post(apiEndpoint, {
        items: obj,
      });
      navigate("/display", {
        state: { text: finalResponse.data.ways },
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSeeOptions = () => {
    if (uploadedImage) {
      if (prediction === "Recyclable") {
        detectObjects(0);
      } else {
        detectObjects(1);
      }
    }
  };
  return (
    <div className="body">
      <Back />
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
                See Recycling options
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
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            <h1>Upload an Image to get started</h1>
          )}
        </div>
      )}
    </div>
  );
}
