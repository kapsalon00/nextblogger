import { ThemeProvider } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
