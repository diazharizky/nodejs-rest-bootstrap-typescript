import { repositories } from '../interfaces'
import { UserId, User } from '../models'

class UserRepository implements repositories.User {
  constructor() {}

  async get(id: UserId): Promise<User> {
    return {}
  }

  async list(): Promise<User[]> {
    return []
  }

  async create(newUser: User) {}

  async update(existingUser: User) {}

  async delete(id: UserId) {}
}

export default UserRepository
