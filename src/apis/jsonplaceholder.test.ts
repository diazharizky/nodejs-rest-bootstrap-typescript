/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import jsonPh, { client, post, comment } from './jsonplaceholder'
import MockAdapter from 'axios-mock-adapter'

const mocker = new MockAdapter(client)

test('Test get posts', async () => {
  const want: post[] = [
    {
      id: 1,
      userId: 1,
      title: 'Fake post title',
      body: 'Fake post body',
    },
  ]

  mocker.onGet('/posts').reply(200, { data: want })

  const data = await jsonPh.getPosts()

  expect(data).toEqual({ data: want })
})

test('Test get comments', async () => {
  const want: comment[] = [
    {
      id: 1,
      postId: 1,
      email: 'fake@email.com',
      name: 'Fake Name',
      body: 'Fake body',
    },
  ]

  mocker.onGet('/comments').reply(200, { data: want })

  const data = await jsonPh.getComments()

  expect(data).toEqual({ data: want })
})
