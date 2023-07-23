import "../styles/Home.css";
// import videobg from "../assets/img/bgvideo.mp4";
import "../assets/bootstrap.bundle.min.js";

const Home = () => {
  return (
    <div classNameName="container home">
      <section className="start-video">
        <div className="start-video__overlay"></div>
        {/* <video src={videobg} autoPlay loop muted /> */}

        <div className="start-video__content h-100 container-custom position-absolute video-content">
          <div className="d-flex h-100 align-items-center start-video__content-width">
            <div className="text-white">
              <h1 className="start-video__heading fw-bold mb-4">
                Waste Wise, Recycling Smart!
              </h1>
              <p className="lead mb-4">Where Waste Reshapes Our World</p>
              <a
                href="#"
                className="mt-2 btn btn-lg btn-outline-light"
                role="button"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img
                  src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
              <div className="about-text">
                <h2 style={{ color: "#43A64C" }}>What do we do?</h2>
                <p>
                  In an era marked by escalating environmental concerns, waste
                  management stands at the forefront of the battle for a
                  sustainable future. The ever-increasing generation of waste,
                  coupled with the adverse impacts it poses to our planet,
                  necessitates urgent action and innovative solutions. Welcome
                  to our project, where we embark on a journey towards effective
                  waste management, waste segregation, recycling, and
                  responsible disposal.
                </p>
                <p>
                  As our global population continues to grow, so does the
                  quantity of waste we generate. Improper waste disposal leads
                  to numerous environmental issues, such as pollution of land,
                  water, and air, as well as the depletion of natural resources.
                  Our planet is facing a critical tipping point, and it is
                  imperative that we address waste management with utmost
                  seriousness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aim section-padding" id="aim">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h2 style={{ color: "#F9741B" }}>Our Aim</h2>
                <p style={{ fontSize: "20px" }}>
                  We are solely dedicated to achieve <br />
                  these perspectives of waste management and much more in
                  future.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <h3 className="card-title">Waste Segregation</h3>
                  <p className="lead">
                    Waste segregation serves as the fundamental pillar of an
                    efficient waste management system. Through this process,
                    different types of waste are separated at the source, making
                    it easier to recycle and process each category optimally.
                    The correct segregation of waste not only streamlines the
                    recycling process but also significantly reduces the volume
                    of waste destined for landfills or incineration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <h3 className="card-title">Recycling is the Key</h3>
                  <p className="lead">
                    Recycling embodies the essence of sustainability by giving a
                    new lease of life to materials that would otherwise end up
                    as waste. Embracing recycling initiatives not only conserves
                    natural resources but also minimizes energy consumption and
                    greenhouse gas emissions. We delve into the diverse world of
                    recycling, exploring various methods, technologies, and best
                    practices that can revolutionize our approach to waste
                    management.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-4">
              <div className="card text-white text-center bg-dark pb-2">
                <div className="card-body">
                  <h3 className="card-title">Responsible Disposal</h3>
                  <p className="lead">
                    While recycling is vital, not all waste can be recycled
                    effectively and efficiently. Responsible disposal methods,
                    such as safe landfilling and waste-to-energy conversion,
                    play a crucial role in handling non-recyclable waste. We
                    explore the importance of proper waste disposal techniques,
                    ensuring they have the least environmental impact while
                    still meeting the demands of waste management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="whywaste" className="whywaste section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h1 style={{ color: "#43A64C" }}>Why segregate waste?</h1>
                <p style={{ fontSize: "20px" }}>
                  Waste segregation is a crucial step in the waste management
                  process and holds significant importance in achieving a
                  sustainable and environmentally-friendly future.
                </p>
              </div>
            </div>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.postimg.cc/hzcnNLQ0/waste-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h5>Efficient Resource Recovery</h5>
                  <p>
                    Segregating waste at the source enables the identification
                    and separation of recyclable materials, such as paper,
                    plastic, glass, and metal. By doing so, these valuable
                    resources can be recovered and reused in manufacturing
                    processes, reducing the need for raw materials and
                    conserving natural resources.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.postimg.cc/w77zKTMn/waste-2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h5>Prevention of Contamination</h5>
                  <p>
                    Mixing different types of waste can lead to contamination,
                    making it challenging to recycle or safely dispose of the
                    materials. By segregating waste at the source, the quality
                    and value of recyclable materials are preserved, ensuring a
                    higher recycling success rate.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.postimg.cc/XY2C5y7f/pexels-mohit-parashar-3222575.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h5>Energy and Cost Savings</h5>
                  <p>
                    Processing mixed waste requires more energy and resources
                    compared to sorted waste. Waste segregation streamlines the
                    recycling and disposal processes, leading to reduced energy
                    consumption and lower overall waste management costs for
                    municipalities and businesses.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.postimg.cc/t4msJQ2D/pexels-tom-fisk-3181031.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h5>Reduction of Landfill Waste</h5>
                  <p>
                    Proper waste segregation minimizes the amount of
                    non-recyclable and hazardous waste that ends up in
                    landfills. This helps extend the lifespan of landfills,
                    which are rapidly reaching capacity in many regions, and
                    reduces the environmental and health risks associated with
                    waste disposal.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.postimg.cc/1zC2bMR8/pexels-deane-bayas-17580983.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption">
                  <h5>Reduces Greenhouse Gas Emissions</h5>
                  <p>
                    Organic waste, when disposed of in landfills, decomposes and
                    produces methane, a potent greenhouse gas. Segregating
                    organic waste for composting or anaerobic digestion helps
                    mitigate methane emissions and contributes to climate change
                    mitigation efforts.
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

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
                  <h4>Soyam Prabha Mallick</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-padding">
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header text-center pb-5">
                <h1 style={{ color: "#43A64C" }}>Contact Us</h1>
                <p style={{ fontSize: "20px" }}>
                  Contact us for any further queries or suggestions.
                </p>
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-md-12 p-0 pt-4 pb-4">
              <form action="#" className="bg-light p-4 m-auto">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Full Name"
                        required=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <input
                        className="form-control"
                        placeholder="Email"
                        required=""
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        required=""
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    className="btn btn-lg btn-block mt-3"
                    type="button"
                    style={{ backgroundColor: "#F9741B" }}
                  >
                    Send Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
