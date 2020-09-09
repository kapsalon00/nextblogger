import { ThemeProvider } from "styled-components";
import "semantic-ui-css/semantic.min.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import ModalContextProvider from "../src/context/ModalContext";
import AuthContextProvider from "../src/context/AuthContext";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};
export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <ModalContextProvider>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
          </ModalContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
