import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";

type CardItem = {
  title: string;
  description: string;
  readMoreLink: string;
};

type ProductInfoCardProps = {
  cards: CardItem[];
  withAnimation?: boolean;
};

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({
  cards,
  withAnimation = true,
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1200px",
        margin: "auto",
        padding: "0 16px",
      }}
    >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          768: { slidesPerView: 2 }, // Medium screens
          1200: { slidesPerView: 3 }, // Large screens
        }}
        autoplay={
          withAnimation ? { delay: 4000, disableOnInteraction: false } : false
        }
        loop
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                height: "100%", // Ensure equal height for all cards
                minHeight: "100%", // Prevent shrinking
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
                margin: 3,
                borderRadius: 3,
                backgroundColor: "var(--light)",
                color: "#000",
                boxShadow: 1,
                transition: "all 0.3s ease",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "var(--primary)",
                  color: "#fff",
                  boxShadow: 6,
                  "& .icon-box": {
                    backgroundImage: `url("/image/icon-shape-white.png")`,
                  },
                  "& .icon": { color: "var(--primary) !important" },
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Box
                  className="icon-box"
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage: `url("/image/icon-shape-primary.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "0.3s",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    size="2x"
                    className="icon"
                    style={{ color: "white" }}
                  />
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {card.description}
                </Typography>
                <Button
                  variant="text"
                  sx={{
                    mt: 2,
                    color: "#4777f5",
                    fontWeight: 500,
                    textTransform: "none",
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductInfoCard;
