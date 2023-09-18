import { createArticle } from './createArticle'

test('test func', () => {
  jest.mock('../repositories/account', () =>
    jest.fn().mockImplementation(() => ({
      create: jest.fn(),
    }))
  )

  createArticle({
    id: 1,
    username: 'fakeusername',
    fullName: 'Fake Fullname',
    email: 'fake@email.com',
    createdAt: new Date().toISOString(),
  })
})
