import Head from 'next/head'
import Footer from '@components/Footer'

export default function Style() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='d-flex justify-content-start align-items-start flex-column'>

        <div className='container-fluid my-5 pt-5'>
          <div className='row'>
            <h1>Style guide and<br />
              <span className='highlight'>components</span>
            </h1>
            <p className='xl mt-3'>The style guide contains important styles and components that are used throughout the template.</p>
          </div>
        </div>

        <div className='container-fluid my-5'>
          <div className='row'>
            <h2 className='mb-3'>Colors</h2>
            <p className='mb-3'>Color distinguishes our brand and helps us create consistent experiences across products.</p>
            <h3 className='my-3'>Neutral</h3>
            <p>Gray is a neutral color and is the foundation of the color system. Almost everything in UI design — text, form fields, backgrounds, dividers — are usually gray.</p>
          </div>
          <div className='row'>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-0"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>0</p>
                    <p className='mb-0 highlight s'>rgba(255, 255, 255, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-10"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>10</p>
                    <p className='mb-0 highlight s'>rgba(247, 247, 247, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-20"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>20</p>
                    <p className='mb-0 highlight s'>rgba(237, 237, 237, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-30"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>30</p>
                    <p className='mb-0 highlight s'>rgba(217, 215, 215, 1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-40"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>40</p>
                    <p className='mb-0 highlight s'>rgba(196, 195, 195, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-50"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>50</p>
                    <p className='mb-0 highlight s'>rgba(173, 172, 172, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-60"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>60</p>
                    <p className='mb-0 highlight s'>rgba(125, 125, 125, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-70"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>70</p>
                    <p className='mb-0 highlight s'>rgba(92, 92, 92, 1)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-80"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>80</p>
                    <p className='mb-0 highlight s'>rgba(65, 65, 65, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-90"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>90</p>
                    <p className='mb-0 highlight s'>rgba(41, 41, 41, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3'>
              <div className="card p-0">
                <div className="color-preview neutral-100"></div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0 me-3 semibold'>100</p>
                    <p className='mb-0 highlight s'>rgba(20, 20, 20, 1)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-3 hidden'>
            </div>
          </div>
        </div>

        <div className='container-fluid my-5'>
          <div className='row py-5'>
            <h2 className='mb-3'>Typography</h2>
            <p className='mb-3'>The main typeface for headers and paragraphs is IvyStyle Sans. FOr branding and Display text we use IvyPresto Display – semibold.</p>
          </div>
          <div className='row my-5 '>
            <div className='col-6'>
              <div className="card p-4 pb-2">
                <h3 className='mb-3'>IvyStyle Sans</h3>
                <div className='d-flex flex-row'>
                  <p className='bold l me-3'>Bold</p>
                  <p className='semibold l me-3'>Semibold</p>
                  <p className='medium l me-3'>Medium</p>
                  <p className='l'>Regular</p>
                </div>
              </div>
            </div>
            <div className='col-6'>
              <div className="card p-4 pb-2">
                <h3 className='mb-3 ivyPresto'>IvyPresto Display</h3>
                <div className='d-flex flex-row'>
                  <p className='semibold l me-3 ivyPresto'>Semibold</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row my-5 py-5'>
            <h4 className='py-4 mb-3 border-bottom'>Heading – Desktop</h4>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 1</p></div>
              <div className=''><p className='s m-0'>IvyPresto Display / SemiBold</p></div>
              <div className=''><p className='s m-0'>104px<span className='ms-2'>105%</span></p></div>
              <div className=' text-end col-6'><h1>Heading 1</h1></div>
            </div>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 2</p></div>
              <div className=''><p className='s m-0'>IvyPresto Display / SemiBold</p></div>
              <div className=''><p className='s m-0'>76px<span className='ms-2'>105%</span></p></div>
              <div className='text-end col-6'><h2>Heading 2</h2></div>
            </div>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 3</p></div>
              <div className=''><p className='s m-0'>IvyStyle Sans / Bold</p></div>
              <div className=''><p className='s m-0'>52px<span className='ms-2'>105%</span></p></div>
              <div className='text-end col-6'><h3>Heading 3</h3></div>
            </div>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 4</p></div>
              <div className=''><p className='s m-0'>IvyStyle Sans / Bold</p></div>
              <div className=''><p className='s m-0'>40px<span className='ms-2'>100%</span></p></div>
              <div className=' text-end col-6'><h4>Heading 4</h4></div>
            </div>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 5</p></div>
              <div className=''><p className='s m-0'>IvyStyle Sans / Bold</p></div>
              <div className=''><p className='s m-0'>30px<span className='ms-2'>100%</span></p></div>
              <div className='text-end col-6'><h5>Heading 5</h5></div>
            </div>
            <div className='d-flex align-items-center justify-content-between py-3 border-bottom'>
              <div className=''><p className='bold m-0'>Heading 6</p></div>
              <div className=''><p className='s m-0'>IvyStyle Sans / Bold</p></div>
              <div className=''><p className='s m-0'>22px<span className='ms-2'>100%</span></p></div>
              <div className='text-end col-6'><h6>Heading 6</h6></div>
            </div>
            <div className="container my-5">
              <div className='row justify-content-center'>
                <div className='col-8'>
                  <h1 className="mt-5">Get full control of your users</h1>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <h2><span>Get full control of your users</span></h2>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <h3><span>Get full control of your users</span></h3>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <h4><span>Get full control of your users</span></h4>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <h5><span>Get full control of your users</span></h5>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <h6><span>Get full control of your users</span></h6>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                  <p className="xl">&nbsp;</p>
                  <h6><span>Text XL</span></h6>
                  <p className="xl"><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate. </span></p>
                  <h6><span>Text Large</span></h6>
                  <p className="large"><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate. </span></p>
                  <h6><span>Text Medium (Default)</span></h6>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate. </span></p>
                  <p><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate. </span></p>
                  <h6><span>Text Small</span></h6>
                  <p className="small"><span>What do your users on your website or app want, why are they not converting, what are they missing, what can you do better to help them find what they want? The Extellio platform provides the insights you need to answer these questions and improve your conversion rate.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
