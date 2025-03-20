import React from "react";
import Overlay from "./Overlay"; // Import Overlay component
import {faPlus} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageData {
  id: number;
  src: string;
  title: string;
  subtitle: string;
  category: string;
}

const images: ImageData[] = [
  {
    id: 1,
    src: "/images/gallery_image_1.jpg",
    subtitle: "Rexsatronix",
    title: "Company entry",
    category: "company",
  },
  {
    id: 2,
    src: "/images/rack1.jpg",
    subtitle: "Smart Rack",
    title: "Smart Rack",
    category: "rack",
  },
  {
    id: 3,
    src: "/images/1l.jpg",
    subtitle: "Conveyor",
    title: "linking Conveyor",
    category: "conveyor",
  },
  {
    id: 4,
    src: "/images/rack2.jpg",
    subtitle: "Smart Rack",
    title: "Smart Rack Reels",
    category: "rack",
  },
  {
    id: 5,
    src: "/images/2l.jpg",
    subtitle: "Colling Conveyor",
    title: "Cooling Conveyor",
    category: "conveyor",
  },
  {
    id: 6,
    src: "/images/3l.jpg",
    subtitle: "Conveyor",
    title: "Conveyor",
    category: "conveyor",
  },
  {
    id: 7,
    src: "/images/4l.jpg",
    subtitle: "Conveyor",
    title: "Customized size Conveyor",
    category: "conveyor",
  },
  {
    id: 8,
    src: "/images/5l.jpg",
    subtitle: "Conveyor",
    title: "1Meter Linking Conveyor",
    category: "conveyor",
  },
  {
    id: 9,
    src: "/images/1.jpg",
    subtitle: "Conveyor",
    title: "1Meter Linking Conveyor",
    category: "conveyor",
  },
  {
    id: 10,
    src: "/images/7l.jpg",
    subtitle: "Conveyor",
    title: "Customized size Conveyor",
    category: "conveyor",
  },
  {
    id: 11,
    src: "/images/gallery_image_1.jpg",
    subtitle: "Company",
    title: "God",
    category: "company",
  },
  {
    id: 12,
    src: "/images/gallery_image_4.jpg",
    subtitle: "Company",
    title: "Conference Room",
    category: "company",
  },
  {
    id: 13,
    src: "/images/gallery_image_5.jpg",
    subtitle: "Company",
    title: "Assembly Area",
    category: "company",
  },

];

const Gallery: React.FC = () => {
  return (
    <div style={styles.container}>
      {/* Gallery grid */}
      <div style={styles.grid}>
        {images.map((item) => (
          <div key={item.id} style={styles.item}>
            <img src={item.src} alt={item.title}  style={styles.image} />
            
            {/*  Use Overlay component */}
            <Overlay title={item.title} subtitle={item.subtitle} />
            
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    padding: "20px",
  },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  item: {
    width: "100%",
    height: "100%",
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    cursor: "pointer",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  
};

export default Gallery;
