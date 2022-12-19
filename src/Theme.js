import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
      paper: "#BCBCBC",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
});

Theme.typography.h1 = {
  fontSize: "2.5rem",
  paddingBottom: "0.1rem",
  paddingTop: "0.1rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    paddingBottom: "0.1rem",
    paddingTop: "0.1rem",
  },
};

Theme.typography.h2 = {
  fontSize: "2rem",
  paddingBottom: "0.1rem",
  paddingTop: "0.1rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    paddingBottom: "0.1rem",
    paddingTop: "0.1rem",
  },
};

Theme.typography.h3 = {
  fontSize: "1.5rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    paddingBottom: "0.4rem",
    paddingTop: "0.4rem",
  },
};

Theme.typography.body2 = {
  fontSize: "1rem",
  textAlign: "justify",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
    paddingBottom: "0.4rem",
    paddingTop: "0.4rem",
  },
};

export default Theme;
