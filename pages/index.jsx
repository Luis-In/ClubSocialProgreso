import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <>
        <Head>
          <title> Inicio | Club Social Progreso</title>
          <meta name="description" content="Inicio | Club Social Progreso, Riberalta, Bolivia" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1>HomePage</h1>
        </main>
      </>
  )
}
