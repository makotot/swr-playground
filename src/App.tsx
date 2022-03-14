import React from 'react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function App() {
  const { data, error } = useSWR<{
    name: string
    language: string
    description: string
    forks: number
  }>('https://api.github.com/repos/vercel/swr', fetcher)

  if (error) {
    return <div>error</div>
  }
  if (!data) {
    return <div>loading</div>
  }

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.language}</div>
      <div>{data.description}</div>
      <div>{data.forks}</div>
    </div>
  )
}

export default App
