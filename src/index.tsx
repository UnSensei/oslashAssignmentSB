import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    mygray: {
      50: "#111827",
      100: "#111827",
      200: "#111827",
      300: "#111827",
      400: "#111827",
      500: "#111827",
      600: "#111827",
      700: "#111827",
      800: "#111827",
      900: "#111827",
    },
    brand: {},
  },
  components: {
    Popover: {
      variants: {
        responsive: {
          content: {
            maxWidth: "unset",
            width: "unset",
          },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
