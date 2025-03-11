import React from "react";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type ImageSliderProps = {
  images: string[];
  interval?: number;
};

const ImageSlider: React.FC<ImageSliderProps> = ({
  images = [],
  interval = 3000,
}) => {
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
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: interval, disableOnInteraction: false }}
        loop
        navigation
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image}
              alt={`Slide ${index + 1}`}
              sx={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ImageSlider;
