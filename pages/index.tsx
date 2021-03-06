import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/Hero/Hero'
import AboutMe from '../components/AboutMeComp/AboutMeComp'

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Savannas Better Birth Doula Services</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <Hero></Hero>
        <AboutMe></AboutMe>

      </main>

      <footer>
      </footer>
    </div>
  )
}

export default Home
