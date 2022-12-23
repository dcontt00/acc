
import { styled } from "@mui/material/styles";
import {List} from "@mui/material"

export const StyledList = styled(List)({
    // selected and (selected + hover) states
    "&& .Mui-selected, && .Mui-selected:hover": {
      border: "5px solid #000",
      "&, & .MuiListItemIcon-root": {
        color: "pink",
      },
    },
    // hover states
    "& .MuiListItemButton-root:hover": {
      backgroundColor: "#cccccc",
      "&, & .MuiListItemIcon-root": {
        color: "yellow",
      },
    },
  });