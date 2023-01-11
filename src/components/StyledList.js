
import { styled } from "@mui/material/styles";
import { List } from "@mui/material"
import Theme from "../Theme"

var color = Theme.palette.primary.main

export const StyledList = styled(List)({

  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    borderStyle: "solid",
    borderWidth: "5px",
    borderColor: "#0A2647",
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