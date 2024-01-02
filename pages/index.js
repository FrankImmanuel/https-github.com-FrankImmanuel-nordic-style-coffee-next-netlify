import Head from 'next/head'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import { createClient } from '../prismicio'
import { SliceZone } from "@prismicio/react";
import { components } from "../slices";

export default function Home({ page }) {

  console.log(page.data);
  
  return (
    <div className="container-fluid">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main className='container'>
        <SliceZone slices={page.data.slices} components={components} />
      </main>
      <Footer /> 
    </div>
  )
}
export async function getStaticProps({ previewData }) {
  // Client used to fetch CMS content.
  const client = createClient({ previewData })

  // Page document for our homepage from the CMS.
  const page = await client.getSingle("home");

  // Pass the homepage as prop to our page.
  return {
    props: { page },
  }
}
