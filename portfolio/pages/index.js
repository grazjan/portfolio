import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/Button'
import CodeWindow from '../components/CodeWindow/CodeWindow'
import Headline from '../components/Headline/Headline'
import Navbar from '../components/Navbar/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Gracjan Drodek</title>
        <meta name="description" content="Homepage" />
      </Head>
      <Navbar/>
      <div className="row h-100vh align-items-center">
        <div className="col-sm-12 col-lg-6">
          <Headline semantic="h1" topline="Lorem ipsum">Hello World</Headline>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad.</p>
          <Button variant="primary">Learn more</Button>
        </div>
        <div className="col-sm-12 col-lg-6 pl-3">
          <CodeWindow/>
        </div>
      </div>
    </div>
  )
}
