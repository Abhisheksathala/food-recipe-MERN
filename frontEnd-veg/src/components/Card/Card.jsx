import React from "react";
import { Link } from "react-router-dom";
import {
  Card as MuiCard,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import AlarmIcon from "@mui/icons-material/Alarm";
import { motion } from "framer-motion";

const Card = ({ item }) => {
  const more = Array.isArray(item?.more) ? item.more[0] : item.more || {};
  const { prep_time } = more;

  return (
    <div className="container mx-auto flex justify-center md:justify-start">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="max-w-sm"
      >
        <MuiCard
          className="rounded-lg shadow-lg transition-all"
          sx={{ maxWidth: 345, borderRadius: "16px", overflow: "hidden" }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={item?.thumbnail_image}
              alt={item?.name}
              sx={{ filter: "brightness(0.9)" }}
            />
            <CardContent sx={{ p: 2 }}>
              <Link
                to={`/items/${item._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  align="center"
                >
                  {item?.name}
                </Typography>
              </Link>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <Button
                  variant="outlined"
                  size="small"
                  sx={{ textTransform: "none" }}
                >
                  {item?.category}
                </Button>
                <Box display="flex" alignItems="center">
                  <IconButton color="primary" size="small">
                    <AlarmIcon fontSize="small" />
                  </IconButton>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="span"
                    ml={1}
                  >
                    {prep_time}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CardActionArea>
        </MuiCard>
      </motion.div>
    </div>
  );
};

export default Card;
