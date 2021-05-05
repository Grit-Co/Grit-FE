import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {

  const { user, error, isLoading } = useUser();
  console.log(user)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // if (user) {
  //   return (
  //     <a href="/api/auth/login">Login</a>
  //     <a href="/api/auth/logout">Logout</a>
  //   )
  // }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        user ? 
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to Grit!
            </h1>
          
            <p className={styles.description}>
              Get started crushing your goals!{' '}
            </p>
            <a href="/api/auth/logout">Logout</a>
          </main>
        : 
        <a href="/api/auth/login">Login</a>
      }
    </div>
  )
}
