

// import React, { useState } from 'react';
// import './Products.css';
// import OverlappingSquare from '../../components/overlappingsquare';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import ReadMoreComponent from '../../components/Readmore';

 
// interface CardProps {
//   imageSrc: string;
//   name: string;
//   description: string;
// }

// const Card: React.FC<CardProps> = ({ imageSrc, name, description }) => {
//   // State to manage image change on hover
//   const [currentImage, setCurrentImage] = useState(imageSrc);
//   // State to manage icon color (white by default)
//   const [iconColor, setIconColor] = useState('white');

//   const handleMouseEnter = () => {
//     setCurrentImage("/image/icon-shape-white.png"); // Change to white icon on hover
//     setIconColor('blue'); // Change icon color to blue on hover
//   };

//   const handleMouseLeave = () => {
//     setCurrentImage(imageSrc); // Revert to original icon when not hovering
//     setIconColor('white'); // Revert icon color back to white when not hovering
//   };

//   return (
    
//     <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
//       <div className="card-image" style={{ position: "relative" }}>
//         {/* Image container */}
//         <img src={currentImage} alt="card-img" height={90} />

//         {/* FontAwesome Icon overlaid on the image */}
//         <FontAwesomeIcon
//           icon={faCheck}
//           size="2x"
//           className="icon"
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%, -50%)",
//             color: iconColor, // Set the icon color dynamically based on state
//           }}
//         />
//       </div>
    
//       <div className="card-content">
//   <h2 className="name">{name}</h2>
//   <p className="description">{description}</p>
//   <div className="circle-container">
//  <ReadMoreComponent/>
//    <div className="circle"></div> {/* Circle inside the button */}
   
//   </div>
// </div>

//     </div>
     
//   );
// };

// const App: React.FC = () => {
//   return (
//        <div className="App">
//       <div className="title">
//         <h1>Products & Solution</h1>
//       </div>

//       <div className="main-content">
//        <div style={{display:'flex',gap:'10px', marginLeft:'25px'}}>
//         <OverlappingSquare/>
//         <h6 style={{marginTop:'10px'}}>Our Services</h6>
//         </div>
         
//       <h2>What Solutions We Provide</h2>
//       </div>
//       <div className="text">
//         <p>
//           We are India's first smart factory solution provider in addressing
//           the challenges of the electronics manufacturing industry, particularly
//           in traceability, material handling, and production execution. We offer
//           end-to-end solutions and enable electronic manufacturers to significantly
//           improve their overall productivity, production efficiency and help our
//           clients to elevate their journey of automation. We carry the pride of our
//           Solutions to be of high Quality, Intelligent and Creative along with an
//           exclusive alignment to Industry 4.0.
//         </p>

//         <div style={{display:'flex',gap:'10px'}}>
//         <OverlappingSquare/>
//           <h6 style={{marginTop:'10px'}}>Product</h6>
//         </div>
        
//         <ul>
//           <li>Smart Inventory Management</li>
//           <li>Smart Reel Storage Systems</li>
//           <li>Automated Storage and Retrieval System (ASRS)</li>
//           <li>Autonomous Mobile Robots (AMR)</li>
//           <li>SMT Material Handling Systems</li>
//           <li>Link Conveyors</li>
//           <li>Inspection Conveyors</li>
//           <li>Cooling Conveyors</li>
//           <li>PCB Loaders</li>
//           <li>PCB Unloaders</li>
//         </ul>

//         <div style={{display:'flex',gap:'10px'}}>
//         <OverlappingSquare/>
//           <h6 style={{marginTop:'10px'}}>Solution</h6>
//         </div>
        
//         <ul>
//           <li>Total Manufacturing Execution Software</li>
//           <li>MES/MOM o Traceability</li>
//           <li>Machine Maintenance o Data Analytics</li>
//         </ul>
//       </div>

//       <div className="content">
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
          
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
         
//         />
//        <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC"
//           description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Series Magazine Loader QIK-ML"
//           description="PCB (Printed Circuit Board) loaders are an integral part of the Surface Mount Technology (SMT) assembly process...."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Single Lane Series Magazine Unloader QIK-MUL"
//           description="PCB (Printed Circuit Board) unloaders play a crucial role in the Surface Mount Technology (SMT)..."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Smart Storage Series Smart Component Incoming System QIK-SCIS"
//           description="A Smart Incoming SMT System Streamlines the process of receiving and inspection electronics components..."
//         />
//         <Card
//           imageSrc="/image/icon-shape-primary.png"
//           name="Smart Storage Series Smart Reel Storage System QIK-SRSS"
//           description="Our Storage system is equipped with features to improve component management, reduce errors..."
//         />
//       </div>
//     </div>
//   );
// };

// export { Card, App, };

import React from 'react';
import './Products.css';
import OverlappingSquare from '../../components/overlappingsquare';

import Card from '../../components/card/card';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="title">
        <h1>Products & Solution</h1>
      </div>

      <div className="main-content">
        <div style={{ display: 'flex', gap: '10px', marginLeft: '25px' }}>
          <OverlappingSquare />
          <h6 style={{ marginTop: '10px' }}>Our Services</h6>
        </div>

        <h2>What Solutions We Provide</h2>
      </div>
      <div className="text">
        <p>
          We are India's first smart factory solution provider in addressing
          the challenges of the electronics manufacturing industry, particularly
          in traceability, material handling, and production execution. We offer
          end-to-end solutions and enable electronic manufacturers to significantly
          improve their overall productivity, production efficiency and help our
          clients to elevate their journey of automation. We carry the pride of our
          Solutions to be of high Quality, Intelligent and Creative along with an
          exclusive alignment to Industry 4.0.
        </p>

        <div style={{ display: 'flex', gap: '10px' }}>
          <OverlappingSquare />
          <h6 style={{ marginTop: '10px' }}>Product</h6>
        </div>

        <ul>
          <li>Smart Inventory Management</li>
          <li>Smart Reel Storage Systems</li>
          <li>Automated Storage and Retrieval System (ASRS)</li>
          <li>Autonomous Mobile Robots (AMR)</li>
          <li>SMT Material Handling Systems</li>
          <li>Link Conveyors</li>
          <li>Inspection Conveyors</li>
          <li>Cooling Conveyors</li>
          <li>PCB Loaders</li>
          <li>PCB Unloaders</li>
        </ul>

        <div style={{ display: 'flex', gap: '10px' }}>
          <OverlappingSquare />
          <h6 style={{ marginTop: '10px' }}>Solution</h6>
        </div>

        <ul>
          <li>Total Manufacturing Execution Software</li>
          <li>MES/MOM o Traceability</li>
          <li>Machine Maintenance o Data Analytics</li>
        </ul>
      </div>

      <div className="content">
       
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 0.5 M Cooling Conveyor QIK-500CC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 0.5 M Inspection Conveyor QIK-500IC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 0.5 M Link Conveyor QIK-500LC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 1 M Inspection Conveyor QIK-1000IC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 1 M Cooling Conveyor QIK-1000CC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT)..."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Conveyor Series 1 M Link Conveyor QIK-1000LC"
          description="PCB (Printed Circuit Board) conveyors are essential equipment within the Surface Mount Technology (SMT) assembly...."
          
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Series Magazine Loader QIK-ML"
          description="PCB (Printed Circuit Board) loaders are an integral part of the Surface Mount Technology (SMT) assembly process...."
       
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Single Lane Series Magazine Unloader QIK-MUL"
          description="PCB (Printed Circuit Board) unloaders play a crucial role in the Surface Mount Technology (SMT)..."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Smart Storage Series Smart Component Incoming System QIK-SCIS"
          description="A Smart Incoming SMT System Streamlines the process of receiving and inspection electronics components..."
        />
        <Card
          imageSrc="/image/icon-shape-primary.png"
          name="Smart Storage Series Smart Reel Storage System QIK-SRSS"
          description="Our Storage system is equipped with features to improve component management, reduce errors..."
        />
      </div>
    </div>
  );
};

export { App };
