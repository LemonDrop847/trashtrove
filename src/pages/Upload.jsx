import "../styles/Upload.css";

export default function Upload() {
  return (
    <div className="body">
      <div className="container1 d-flex justify-content-center flex-column align-items-center">
        <input type="file" id="file" accept="image/*" hidden />
        <div className="img-area1" data-img="">
          <i className="bx bxs-cloud-upload icon"></i>
          <h3>Upload Image</h3>
          <p>
            Image size must be less than <span>2MB</span>
          </p>
        </div>
        <input type="file" name="" className="select-image " id="" />
        <button className= "select-image" style={{marginTop:'1rem'}}>Submit</button>
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
