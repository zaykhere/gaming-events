import Head from "next/head";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title> {title} </title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      {children}
    </div>
  );
};

Layout.defaultProps = {
  title: "Gaming Events | Find the latest gaming events",
  description:
    "Welcome to Gaming Events.. Here you can find information about latest gaming events",
  keywords: 'games, video games, pc games, counter strike, pubg, gta'  
};

export default Layout;
