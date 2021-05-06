import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Button from '../src/components/Button'

import { useUser } from '@auth0/nextjs-auth0';

export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className={styles.container}>
      {
        user ? 
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to the <span>GRIT</span> community!
            </h1>
          
            <p className={styles.description}>
              We are excited to see you define goals and connect 
              with women who will help you grow into the woman 
              that you were meant to be.
            </p>

            <h3>
              Are you ready to set your first goal? 
            </h3>

            <Link
              href='/setup'
            >
              <a className={styles['primary-link']}>Set Goal</a>
            </Link>
            {/* <Link
              className={styles['secondary-link']}
              href='/'
            >
              <a>Skip</a>
            </Link> */}
            <Button 
              text='Skip'
              isPrimary={false}
            />
            {/* <a href="/api/auth/logout">Logout</a> */}
          </main>
        : 
        <a href="/api/auth/login">Login</a>
      }
    </div>
  )
}
