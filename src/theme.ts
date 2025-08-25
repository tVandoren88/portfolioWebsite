// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "rgb(255, 153, 0)" }, // Warm AWS orange accent
    secondary: { main: "rgb(102, 102, 102)" }, // Neutral gray accent
    background: {
      default: "rgb(245, 245, 245)", // Very light gray page background
      paper: "rgb(255, 255, 255)",   // White cards / sections
    },
    text: {
      primary: "rgb(33, 33, 33)",   // Dark gray
      secondary: "rgb(117, 117, 117)", // Medium gray
    },
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h2: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
});

export default theme;
