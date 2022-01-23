import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";

const Layout = ({ title, keywords, description, children }) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      {router.pathname==='/' && <Showcase /> }
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Gaming Events | Find the latest gaming events",
  description:
    "Welcome to Gaming Events.. Here you can find information about latest gaming events",
  keywords: "games, video games, pc games, counter strike, pubg, gta",
};

export default Layout;
