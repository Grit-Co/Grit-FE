import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Button from '../src/components/Button/Button';

import styles from '../styles/pages/home.module.scss';


export default function Home() {

  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Head>
        <title>Grit</title>
        <link rel="icon" href="/favicon.ico" />
        {/* TODO: Download these? */}
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet"/>
      </Head>
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
            <Button 
              text='Skip'
              isPrimary={false}
            />
            
          </main>
        : 
        <main className={styles.main}>
          <h1 className={styles.title}>
              <span>GRIT</span> <br/>
              Empowering you to be your best.
          </h1>
        <Image
          src="/slash.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
          <a href="/api/auth/login">Login</a>
          <div className={styles.footer}>
            <p>{"Don't have an account?"}</p>
            <a href="/api/auth/login">Sign Up</a>
          </div>
        </main>
      }
    </div>
    </>
  )
}
