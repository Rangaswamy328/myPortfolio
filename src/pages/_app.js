import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light w-full min-h-screen `} >
        <NavBar />
        <Layout>
          <Home />
          <Projects />
          <Contact />
        </Layout>
          <Footer />
        <Component {...pageProps} />
      </main>
    </>
  );
}
