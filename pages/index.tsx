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

      <main className="min-h-screen grid place-content-center place-items-center">
        <h1 className="text-5xl font-black">Welcome to QuickStarter!</h1>
        <p className="text-xl mt-2">
          A Next.js + Tailwind CSS + TypeScript + Prisma boilerplate.
        </p>
      </main>
    </>
  );
};

export default Home;
