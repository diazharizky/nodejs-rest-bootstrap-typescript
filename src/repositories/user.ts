import { repositories } from '../interfaces'
import { UserId, User } from '../models'

class UserRepository implements repositories.User {
  constructor() {}

  async get(id: UserId): Promise<User> {
    return {
      id,
      email: '',
      username: '',
      fullName: '',
      createdAt: '',
    }
  }

  async list(): Promise<User[]> {
    return []
  }

  create(newUser: User) {}

  update(existingUser: User) {}

  delete(id: UserId) {}
}

export default UserRepository
