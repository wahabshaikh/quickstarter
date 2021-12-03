import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
