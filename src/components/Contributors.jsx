import "../styles/Home.css";
export default function Contributors() {
  return (
    <section className="team section-padding" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header text-center pb-5">
              <h1 style={{ color: "#F9741B" }}>Our Team</h1>
              <p style={{ fontSize: "20px" }}>
                Meet our amazing team working together to solve social issues
                globally.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-team">
              <div className="img-area">
                <img
                  src="https://i.postimg.cc/F7B91kw9/nitin.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="img-text">
                <h4>Nitin Mishra</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-team">
              <div className="img-area">
                <img
                  src="https://i.postimg.cc/CRnw8LVb/anil.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="img-text">
                <h4>Anil Kumar Behera</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-team">
              <div className="img-area">
                <img
                  src="https://i.postimg.cc/xkrn3D0h/srusti.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="img-text">
                <h4>Srusti Swarupini Prusty</h4>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="single-team">
              <div className="img-area">
                <img
                  src="https://i.postimg.cc/hJ9gCyvj/soyam.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="img-text">
                <h4>choyam Prabha Mallick</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
