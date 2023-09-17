/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import jsonPh, { client, Post, Comment } from './jsonplaceholder'
import MockAdapter from 'axios-mock-adapter'

const mockAxios = new MockAdapter(client)

test('Test get posts', async () => {
  const want: Post[] = [
    {
      id: 1,
      userId: 1,
      title: 'Fake post title',
      body: 'Fake post body',
    },
  ]

  mockAxios.onGet('/posts').reply(200, { data: want })

  const data = await jsonPh.getPosts()

  expect(data).toEqual({ data: want })
})

test('Test get comments', async () => {
  const want: Comment[] = [
    {
      id: 1,
      postId: 1,
      email: 'fake@email.com',
      name: 'Fake Name',
      body: 'Fake body',
    },
  ]

  mockAxios.onGet('/comments').reply(200, { data: want })

  const data = await jsonPh.getComments()

  expect(data).toEqual({ data: want })
})
