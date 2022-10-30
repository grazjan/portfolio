import Head from 'next/head'
import Image from 'next/image'
import CodeWindow from '../components/CodeWindow/CodeWindow'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Gracjan Drodek</title>
        <meta name="description" content="Homepag" />
      </Head>
      <div className="d-flex">
        <p className='topline'>Lorem ipsum</p>
        <h1>Lorem ipsum<br/>dolor sit amet</h1>
        <CodeWindow/>
      </div>
    </div>
  )
}
