import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QuickStarter</title>
        <meta
          name="description"
          content="A Next.js + Tailwind CSS + TypeScript + Prisma boilerplate."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to QuickStarter!</h1>
        <p>A Next.js + Tailwind CSS + TypeScript + Prisma boilerplate.</p>
      </main>
    </>
  );
};

export default Home;
