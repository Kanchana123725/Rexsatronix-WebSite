import React, { useState, useEffect, useCallback } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const ImageSlider = ({ images = [], interval = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [setDirection, setIndex, images]);

  // Auto-slide effect
  useEffect(() => {
    const timer = setTimeout(handleNext, interval);
    return () => clearTimeout(timer);
  }, [index, interval, handleNext]);

  return (
    <Box
      position="relative"
      width="100%"
      maxWidth={600}
      mx="auto"
      overflow="hidden"
      bgcolor="white"
      sx={{ borderRadius: 4 }}
    >
      <Box position="relative" width="100%" height={400}>
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={`Slide ${index + 1}`}
            initial={{ x: direction * 100 + "%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{
              x: -direction * 100 + "%",
              opacity: 0,
              position: "absolute",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={imageStyle}
          />
        </AnimatePresence>
      </Box>

      {/* Navigation Buttons */}
      <IconButton onClick={handlePrev} sx={navButtonStyle("left")}>
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton onClick={handleNext} sx={navButtonStyle("right")}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

/* Styles */
const imageStyle = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
};

const navButtonStyle = (position) => ({
  position: "absolute",
  top: "50%",
  [position]: 10,
  transform: "translateY(-50%)",
  color: "gray",
});

export default ImageSlider;
