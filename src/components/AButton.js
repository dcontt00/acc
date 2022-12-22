import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function AButton(props) {
  return (
    <Button
      variant="contained"
      component={motion.div}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      color={props.color || "primary"}
      size={props.size || "small"}
      onClick={props.onClick}
      sx={props.sx}
    >
      <Typography variant="subtitle1">{props.text}</Typography>
    </Button>
  );
}
