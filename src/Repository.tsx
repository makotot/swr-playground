import { Repo } from './type'

export const Repository = ({ data }: { data: Repo }) => {
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.language}</div>
      <div>{data.description}</div>
      <div>{data.forks}</div>
    </div>
  )
}
