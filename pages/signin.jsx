import Head from "next/head";
import { Layout } from "../components";
import SigninForm from "../components/SignInForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>Remontada | Signin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout text="Register" url="/signup">
        <SigninForm />
      </Layout>
    </>
  );
}
