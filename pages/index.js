import style from "../styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Nordic Radio </title>
        <meta name="author" content="Leo Eriksson"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <div className={style.home}>
        <div className={style.banner}>
          <h2 className={style.bannerText}> Välkommen till Nordic Radio! </h2>
        </div>
      </div>
    </>
  );
}
