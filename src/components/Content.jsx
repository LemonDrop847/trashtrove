import "../styles/Home.css";
export default function Content() {
  return (
    <div>
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
    </div>
  );
}
