import axios from 'axios'

export const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

const getPosts = async (): Promise<Post[]> => {
  const { data } = await client.get<Post[]>('/posts')

  return data
}

const getComments = async (): Promise<Comment[]> => {
  const { data } = await client.get<Comment[]>('/comments')

  return data
}

export default {
  getPosts,
  getComments,
}
