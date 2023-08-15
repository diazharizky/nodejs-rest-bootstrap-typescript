import { createArticle } from './createArticle'
import { User } from '../models'

test('test func', () => {
  jest.mock('../repositories/user', () => {
    return jest.fn().mockImplementation(() => {
      return {
        create: jest.fn().mockImplementationOnce(() => Promise.resolve()),
      }
    })
  })

  const now = new Date().toISOString()
  const newUser: User = {
    id: 1,
    username: 'fakeusername',
    fullName: 'Fake Fullname',
    email: 'fake@email.com',
    createdAt: now,
  }

  createArticle(newUser)
})
