import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>QuickStarter</title>
        <meta
          name="description"
          content=" Next.js, Tailwind CSS, Supabase boilerplate. Includes checkout with Stripe."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-screen place-content-center place-items-center">
        <h1 className="text-5xl font-black">Welcome to QuickStarter!</h1>
        <p className="mt-2 text-xl">
          Next.js, Tailwind CSS, Supabase boilerplate. Includes checkout with
          Stripe.
        </p>
      </main>
    </>
  );
};

export default Home;
