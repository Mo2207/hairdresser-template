import CavaniState from "@/src/Context";
import CavaniHead from "@/src/layout/CavaniHead";
import Head from 'next/head';
import "@/styles/globals.css";
import Particles from "@/src/components/author/Particles";

export default function App({ Component, pageProps }) {
  return (
    <CavaniState>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <CavaniHead />
      <Component {...pageProps} />
    </CavaniState>
  );
}
