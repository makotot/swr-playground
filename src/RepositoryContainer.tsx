import useSWR from 'swr'
import { Repository } from './Repository'
import { Repo } from './type'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const RepositoryContainer = () => {
  const { data } = useSWR<Repo>(
    'https://api.github.com/repos/vercel/swr',
    fetcher,
    { suspense: true }
  )

  // Ref: https://github.com/vercel/swr/issues/1412
  // data can be undefined as type.
  return <Repository data={data as Repo} />
}
