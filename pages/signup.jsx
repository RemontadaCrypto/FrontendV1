import React from "react";
import Head from "next/head";
import { Layout } from "../components";
import SignupForm from "../components/SignupForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remontada | Signup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout text="Login" url="/signin">
        <SignupForm />
      </Layout>
    </>
  );
}
