import Link from 'next/link';
import Layout from '../components/Layout';

function AboutPage() {
  return (
      <Layout title="About Gaming Events">
      <h1> About </h1>
      <p> This is the website to find latest gaming events</p>
      <p> Version: 1.0.0 </p>
      <Link href="/"> Home </Link>
      </Layout>
  )
}

export default AboutPage;
