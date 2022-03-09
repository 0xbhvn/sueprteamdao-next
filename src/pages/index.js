import { useEffect } from "react";
import Head from "next/head";

import { MainLayout } from "../components/main-layout";

import { HomeHero } from "../components/home/home-hero";

import { gtm } from "../lib/gtm";

const Home = () => {
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  return (
    <>
      <Head>
        <title>SuperteamDAO</title>
      </Head>
      <main>
        <HomeHero />
      </main>
    </>
  );
};

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
