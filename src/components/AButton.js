import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function AButton(props) {
    return (

        <Button
            variant="contained"
            component={motion.div}
            whileHover={{ scale: 1.080, }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            color={props.color || "primary"}
            size={props.size || "small"}
            onClick={props.onClick}
            sx={props.sx}
        >
            {props.text}
        </Button>
    );
}