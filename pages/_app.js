import Layout from "../components/Layout";
import { MediumProvider } from "../context/MediumContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MediumProvider>
  );
}

export default MyApp;
