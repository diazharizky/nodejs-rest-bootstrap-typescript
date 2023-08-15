import { repositories } from '../interfaces'
import { UserId, User } from '../models'

class UserRepository implements repositories.User {
  private users: User[]

  constructor() {
    this.users = []
  }

  async get(id: UserId): Promise<User> {
    return this.users[id - 1]
  }

  async list(): Promise<User[]> {
    return this.users
  }

  create(newUser: User) {
    this.users.push(newUser)
  }

  update(existingUser: User) {
    this.users[existingUser.id - 1] = existingUser
  }

  delete(id: UserId) {
    this.users.splice(id - 1, 1)
  }
}

export default UserRepository
