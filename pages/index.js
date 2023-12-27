import Head from 'next/head'
import Footer from '@components/Footer'
import Navigation from '@components/Navigation'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div className="container-fluid">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation></Navigation>
      <main className='container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className="hero-container">
              <div className="start">
                <p className='xl'>Coffee of the week</p>
                <h2>Gringo Nordic Coffee Roasters</h2>
                <p className='l mt-3'>Coffee of the week is a fruity and elegant natural Bourbon from Nicaragua . As always we’ll have it on batch brew, espresso, V60 and now aeropress too. Pop by for a cup or buy a bag for yourself or as a Christmas gift to that coffee loving relative perhaps?</p>
                <Link className="btn btn-primary btn-lg xs" href="/style">Style</Link>
                <button className="btn btn-primary btn-lg xs"> hello</button>
              </div>
              <div className="end">
                <Image
                  src="https://res.cloudinary.com/djakne/image/upload/v1618217329/DSC_0453_vi0yoz.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid pb-5 mb-5'>
          <div className='row'>
            <div className="features-container col-4">
              <div className="start">
                <Image
                  src="https://res.cloudinary.com/djakne/image/upload/v1618217329/DSC_0453_vi0yoz.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="end">
                <div className='mb-3'>
                  <h5>Coffee bar</h5>
                  <p className='mt-3'>Our coffee bar in the middle of Malmö works as our laboratory and showroom for Nordic Style Rosting. Here we also serve and sell Coffee of the week.</p>
                  <p className='bold l mb-1'>Opening hours & location</p>
                  <p>08 - 17 on week days<br />Djäknegatan 9, Malmö, Sweden</p>
                </div>
                <button className="btn btn-primary">Find us on a map</button>
              </div>
            </div>
            <div className="features-container col-4">
              <div className="start">
                <Image
                  src="https://res.cloudinary.com/djakne/image/upload/v1618217329/DSC_0453_vi0yoz.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="end">
                <div className='mb-3'>
                  <h5>Coffee Subscription</h5>
                  <p className='l mt-3'>It will soon be possible to get coffee of the week in your mailbox.</p>
                  <p>You can choose if you want to get coffee of the week every week, every second week or every fourth week.</p>
                </div>
                <button className="btn btn-primary">Sign me up!</button>
              </div>
            </div>
            <div className="features-container col-4">
              <div className="start">
                <Image
                  src="https://res.cloudinary.com/djakne/image/upload/v1618217329/DSC_0453_vi0yoz.jpg"
                  alt=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="end">
                <div className='mb-3'>
                  <h5>Our app</h5>
                  <p className='l mt-3'>We are right now building the necessary app for all of us that believes that coffee is....important. You will be able to:</p>
                    <ul>
                      <li>Save your coffee experiences</li>
                      <li>Analyze your data and find out what you really like</li>
                      <li>Find the best coffee experiences</li>
                    </ul>
                </div>
                <button className="btn btn-primary ">I’m interested</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer /> 
    </div>
    </>
  )
}
