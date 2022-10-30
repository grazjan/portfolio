import Head from 'next/head'
import Image from 'next/image'
import Button from '../components/Button/Button'
import CodeWindow from '../components/CodeWindow/CodeWindow'
import Headline from '../components/Headline/Headline'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home | Gracjan Drodek</title>
        <meta name="description" content="Homepag" />
      </Head>
      <div className="d-flex">
        <Headline semantic="h1" topline="Lorem ipsum">Hallo World</Headline>
        <CodeWindow/>
        <Button variant="primary">Button</Button>
      </div>
    </div>
  )
}
