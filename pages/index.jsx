import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState } from 'react';

export default function Home() {
  const [inputText, setInputText] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleChange = (e) => {
    setInputText(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(inputText && !shortUrl ) {
    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl: inputText })
    }
    const response = await fetch(`http://localhost:3000/api/shorten`, options).then(res => res.json())
    setShortUrl(`http://localhost:3000/${response.key}`)
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>URL SHORTENER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={inputText} onChange={(e) => handleChange(e)} />
          <button type='submit'>SHORTEN THIS!</button>
        </form>
        <a target='_blank' href={shortUrl}>{shortUrl}</a>
      </main>
    </div>
  )
}
