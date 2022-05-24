import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Image from 'next/image'
import mypic from '../public/rasel.png'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Happy Birthday from Sadika with ❤️ " />
        <Image src="/rasel.png" width="500" height="400"></Image>
        <p className="description">
          We also love you sir❤️
        </p>
      </main>

      <Footer />
    </div>
  )
}
