import React from 'react';
import './Products.css';
import { Card } from '@mui/material';
// import Card from './Card'; // Import the Card component

const App: React.FC = () => {
  return (
    
    <div className="App">
      <div className="title">
        <h1>Products & Solution</h1>
      </div>

      <div className="main-content">
        <div className="services-header">
          <img src="/image/symbol.png" alt="services" className="services-image" />
          <h6>Our Services</h6>
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

        <div className="color">
          <img src="/image/symbol.png" alt="services" className="services-image" />
          <h5>Product</h5>
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

        <div className="color">
          <img src="/image/symbol.png" alt="services" className="services-image" />
          <h5>Solution</h5>
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

export default App;
