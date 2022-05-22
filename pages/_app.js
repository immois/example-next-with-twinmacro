import GlobalStyles from "../components/GlobalStyles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
