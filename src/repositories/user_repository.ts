import { UserRepository } from '../interfaces'
import { User, UserId } from '../models'

const repo: UserRepository = {
  get: (id: UserId): User => {
    return {}
  },
  list: (): User[] => {
    const users: User[] = [
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

    return users
  },
  create: (newUser: User) => {},
  update: (existingUser: User) => {},
  delete: (id: UserId) => {},
}

export default repo
