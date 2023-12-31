import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Searchbox } from "@/components/searchbox"
import { Results } from "@/components/results"
import { INPUT_VALUE } from "@/utils/constants"

const Home: NextPage = () => {
  const [input, setInput] = useState('')
  const [suggestion, setSuggestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (input.length < INPUT_VALUE) setError(false)
  }, [input])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input) return setError(true)
    if (input.length > INPUT_VALUE) return setError(true)
    setLoading(true)

    try {
      const res = await fetch('/api/conversation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input }),
      })

      const response: { result: string } = await res.json()
      const { result } = response

      setSuggestion(result)
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
      setInput('')
    }
  }

  return (
    <div>
      <Head>
        <title>Klu Support Agent</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full mx-auto'>
        <Navbar heading="Klu Knowledge Base" subHeading="Answer questions and help people understand AI"/>
        <div className='flex gap-12 justify-center mx-auto p-8'>
          <Searchbox className="basis-1/4"
           handleSubmit={handleSubmit}
           input={input}
           setInput={setInput}
           loading={loading}
           error={error}/>
          <Results className="basis-1/2" suggestion={suggestion}/>
        </div>
      </div>
    </div>
  )
}

export default Home
