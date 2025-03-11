import ImageSlider from "../../components/ImageSlider";
import "./LandingPage.css";
import ProductInfoCard from "../../components/product info card/ProductInfoCard";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const images = [
    "/image/1.jpg",
    "/image/2.jpg",
    "/image/3.jpg",
    "/image/4.jpg",
  ];

  const cards = [
    {
      title: "1Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly....",
      readMoreLink: "test",
    },
    {
      title: "2Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)...",
      readMoreLink: "test",
    },
    {
      title: "3Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...",
      readMoreLink: "test",
    },
    {
      title: "4Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)...",
      readMoreLink: "test",
    },
    {
      title: "5Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...",
      readMoreLink: "test",
    },
    {
      title: "6Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)...",
      readMoreLink: "test",
    },
    {
      title: "7Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC",
      description:
        "PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...",
      readMoreLink: "test",
    },
  ];

  return (
    <>
      <div className="container-xxl py-5 md-5 hero-header bg-color ">
        <div className="container my-5 py-5 px-lg-5">
          <div className="row g-5 py-5 d-lg-flex ">
            {/* have change flex direction */}
            <div className="col-12 col-lg-6 text-center text-lg-start">
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
            <div className="col-12 col-lg-6">
              <ImageSlider images={images} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 cardContainer ">
        <div className="product-card-wrapper">
          <h6 className="section-title ">Our Product & Solutions</h6>
          <p className="product-title">
            Our compressive solutions aligned with Industry 4.0
          </p>
        </div>
        <div className="mt-5">
          <ProductInfoCard cards={cards} />
        </div>
        <Link to={"/products"} className="readme-btn-wrapper">
          <button className="readme-btn">Read More</button>
        </Link>
      </div>
      <div className="container-xxl py-5 cardContainer ">
        <div>
          <h6 className="section-title ">About Us</h6>
          <p className="product-title">
            Dedicated to revolutionizing the electronic manufacturing industry.
          </p>
        </div>
        <div className="mt-5">
          <ProductInfoCard cards={cards} withAnimation={false} />
        </div>
        <Link to={"/about"} className="readme-btn-wrapper">
          <button className="readme-btn">Read More</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
