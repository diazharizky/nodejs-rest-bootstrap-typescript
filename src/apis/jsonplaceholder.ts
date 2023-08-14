import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export type post = {
  userId: number
  id: number
  title: string
  body: string
}

export type comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getPosts = async (): Promise<post[]> => {
  const { data } = await client.get<post[]>('/posts')

  return data
}

const getComments = async (): Promise<comment[]> => {
  const { data } = await client.get<comment[]>('/comments')

  return data
}

export default {
  getPosts,
  getComments,
}
