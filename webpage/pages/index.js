import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Hello Home</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/prices">Prices</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>

      </ul>
    </div>
  )
}
