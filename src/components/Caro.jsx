export default function Caro() {
  return (
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
                  Segregating waste at the source enables the identification and
                  separation of recyclable materials, such as paper, plastic,
                  glass, and metal. By doing so, these valuable resources can be
                  recovered and reused in manufacturing processes, reducing the
                  need for raw materials and conserving natural resources.
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
                  materials. By segregating waste at the source, the quality and
                  value of recyclable materials are preserved, ensuring a higher
                  recycling success rate.
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
                  non-recyclable and hazardous waste that ends up in landfills.
                  This helps extend the lifespan of landfills, which are rapidly
                  reaching capacity in many regions, and reduces the
                  environmental and health risks associated with waste disposal.
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
                  produces methane, a potent greenhouse gas. Segregating organic
                  waste for composting or anaerobic digestion helps mitigate
                  methane emissions and contributes to climate change mitigation
                  efforts.
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
  );
}
