import React, { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
  const [activeIndex, setActiveIndex] = useState(0);

  // Responsive Breakpoints
  const isLargeScreen = useMediaQuery("(min-width:1400px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:768px) and (max-width:1399px)"
  );

  const cardsToShow = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;

  const handleNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  useEffect(() => {
    const timer = setInterval(handleNext, 4000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {withAnimation ? (
        <motion.div
          style={{
            display: "flex",
            gap: "16px",
            width: `${cards.length * 100}%`,
          }}
          animate={{ x: `-${activeIndex * (100 / cardsToShow)}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {cards.map((card, index) =>
            renderCard(card, index, activeIndex, cardsToShow)
          )}
        </motion.div>
      ) : (
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            width: "100%",
            transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {cards.map((card, index) =>
            renderCard(card, index, activeIndex, cardsToShow)
          )}
        </Box>
      )}
    </Box>
  );
};

const renderCard = (
  card: CardItem,
  index: number,
  activeIndex: number,
  cardsToShow: number
) => (
  <Card
    key={index}
    sx={{
      minWidth: `calc(100% / ${cardsToShow})`,
      maxWidth: "250px",
      p: 2,
      py: 4,
      borderRadius: 3,
      backgroundColor: "var(--light)",
      color: "#000",
      boxShadow: 1,
      transition: "all 0.3s ease",
      cursor: "pointer",
      flex: `0 0 calc(100% / ${cardsToShow})`,
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
          color: index === activeIndex ? "#fff" : "#4777f5",
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        Read More
      </Button>
    </CardContent>
  </Card>
);

export default ProductInfoCard;
