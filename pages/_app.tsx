import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <h1>navbar</h1>
      <Component {...pageProps} />
      <h1>footer</h1>
    </>
  );
}

export default MyApp;
