import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="We love our Sir!! Love you sir" />
        <p className="description">
          শিরায় শিরায় রক্ত  : আমরা স্যারের ভক্ত❤️
        </p>
      </main>

      <Footer />
    </div>
  )
}
