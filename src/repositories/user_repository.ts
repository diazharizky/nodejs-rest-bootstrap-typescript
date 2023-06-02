import { UserRepository } from '../interfaces'
import { User, UserId } from '../models'

const repo: UserRepository = {
  get: (id: UserId): User => {
    return {}
  },
  list: (): User[] => {
    return []
  },
  create: (newUser: User) => {},
  update: (existingUser: User) => {},
  delete: (id: UserId) => {},
}

export default repo
