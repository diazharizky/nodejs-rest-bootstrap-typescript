import { UserRepository } from '../interfaces'
import { User, UserId } from '../models'

const repo: UserRepository = {
  get: async (id: UserId): Promise<User> => {
    return {
      id: 1,
      email: 'foo@mail.com',
      username: 'foo',
      fullName: 'Foo',
    }
  },
  list: async (): Promise<User[]> => {
    return [
      {
        id: 1,
        email: 'foo@mail.com',
        username: 'foo',
        fullName: 'Foo',
      },
      {
        id: 2,
        email: 'bar@mail.com',
        username: 'bar',
        fullName: 'Bar',
      },
    ]
  },
  create: async (newUser: User) => {
    const err = new Error('error creating new user')
    throw err
  },
  update: (existingUser: User) => {},
  delete: (id: UserId) => {},
}

export default repo
