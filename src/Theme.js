import { createTheme } from "@mui/material/styles";

const Theme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#0A2647",
      },
      secondary: {
        main: "#FF9800",
      },
      background: {
        main: "#121212",
        paper: "#BBDEFB",
      },
      text: {
        main: "#000000",
      },
      success: {
        main: "#4caf50",

      }


    },
    components: {
      MuiAlert: {
        styleOverrides: {
          standardInfo: {
            backgroundColor: "#1976D2",
            color: "#FFFFFF",
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: "#0A2647",
          },
        },
      }
    },


    typography: {
      fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
    },
  }
);

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
Theme.typography.body1 = {
  textAlign: "justify",

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
