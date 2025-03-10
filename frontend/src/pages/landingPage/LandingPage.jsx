import ImageSlider from "../../components/imageSlider";
import "./LandingPage.css";
const LandingPage = () => {
  const images = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
  ];

  return (
    <>
      <div className="container-xxl py-5 md-5 hero-header bg-color ">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5 d-lg-flex ">
            {/* have change flex direction */}
            <div className="col-12 col-lg-7 text-center text-lg-start">
              <h1 className="text-white mb-2 animated zoomIn fw-bold custom-letter-spacing">
                Quality, Intelligent &amp; Creative Solutions
              </h1>
              <p className="text-white animated zoomIn subheading-text">
                To revolutionize manufacturing and shop floor operations with
                unprecedented efficiency and innovation in scale!!
              </p>

              <p className="text-white pb-3 animated zoomIn main-description">
                REXSATRONIX is a cutting-edge startup based in Mysuru, India. We
                specialize in the design, development, and manufacturing of
                advanced equipment and software solutions for Electronic
                Manufacturing Industries. We offer end-to-end solutions that
                enable electronic manufacturers to significantly improve their
                overall productivity and elevate their journey of automation.
              </p>
            </div>
            <div className="col-12 col-lg-5">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "100vh" }}>test</div>
    </>
  );
};

export default LandingPage;
