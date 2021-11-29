import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dyad</title>
        <meta name="description" content="A local social networking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Dyad</h1>
        <h3>A local social network</h3>
       
      </main>

      <footer className={styles.footer}>
        <p>Contact</p>
      </footer>
    </div>
  )
}
