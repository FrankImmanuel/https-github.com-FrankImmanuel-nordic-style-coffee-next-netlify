import '@styles/globals.scss'

function Application({ Component, pageProps }) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}

export default Application