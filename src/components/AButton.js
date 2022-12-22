import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { ThreeP } from "@mui/icons-material";

export default function AButton(props) {

  function Icon() {
    if (props.icon) {

      return (
        props.icon
      );
    }
  }

  function Text() {
    if (props.text) {

      return (
        <Typography variant="subtitle1">{props.text}</Typography>
      );
    }
  }


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
      {...props}

    >

      <Icon />
      <Text />
    </Button>
  );
}
