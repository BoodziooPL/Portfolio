import Head from 'next/head'
import Header from '../components/Header'
export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Frontend Developer Portfolio</title>
      </Head>
      {/* header */}

      <Header />
    </div>
  )
}
