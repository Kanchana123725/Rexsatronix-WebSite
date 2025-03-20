import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './Card.css';  // Add specific styles for the Card component
import ReadMoreComponent from '../Readmore';

interface CardProps {
  imageSrc: string;
  name: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, name, description }) => {
  // State to manage image change on hover
  const [currentImage, setCurrentImage] = useState(imageSrc);
  // State to manage icon color (white by default)
  const [iconColor, setIconColor] = useState('white');

  const handleMouseEnter = () => {
    setCurrentImage("/image/icon-shape-white.png"); // Change to white icon on hover
    setIconColor('blue'); // Change icon color to blue on hover
  };

  const handleMouseLeave = () => {
    setCurrentImage(imageSrc); // Revert to original icon when not hovering
    setIconColor('white'); // Revert icon color back to white when not hovering
  };

  return (
    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="card-image" style={{ position: "relative" }}>
        <img src={currentImage} alt="card-img" height={90} />
        <FontAwesomeIcon
          icon={faCheck}
          size="2x"
          className="icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: iconColor,
          }}
        />
      </div>
    
      <div className="card-content">
        <h2 className="name">{name}</h2>
        <p className="description">{description}</p>
        <div className="circle-container">
         <ReadMoreComponent/>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Card;

