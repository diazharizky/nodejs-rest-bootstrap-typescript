import UserRepository from '../repositories/user'
import { User } from '../models'

export const createArticle = (newUser: User) => {
  const repo = new UserRepository()

  repo.create(newUser)
}
