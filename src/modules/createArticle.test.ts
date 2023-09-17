import { createArticle } from './createArticle'
import { Account } from '../models'

test('test func', () => {
  jest.mock('../repositories/account', () => {
    return jest.fn().mockImplementation(() => {
      return {
        create: jest.fn().mockImplementationOnce(() => Promise.resolve()),
      }
    })
  })

  const now = new Date().toISOString()
  const newAccount: Account = {
    id: 1,
    username: 'fakeusername',
    fullName: 'Fake Fullname',
    email: 'fake@email.com',
    createdAt: now,
  }

  createArticle(newAccount)
})
