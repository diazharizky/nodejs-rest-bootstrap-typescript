import UserRepository from './user'
import { User } from '../models'

const repo = new UserRepository()
const newUser: User = {
  id: 1,
  username: 'fakeusername',
  fullName: 'Fake Fullname',
  email: 'fake@email.com',
}

test('test create and list', async () => {
  const now = new Date().toISOString()
  newUser.createdAt = now

  await repo.create(newUser)
  const users = await repo.list()

  expect(users.length).toEqual(1)
})

test('test update', async () => {
  const now = new Date().toISOString()

  const updatedUser: User = newUser
  updatedUser.username = 'new_fakeusername'
  updatedUser.updatedAt = now

  await repo.update(updatedUser)
  const user = await repo.get(updatedUser.id)

  expect(user.username).toEqual(updatedUser.username)
})

test('test delete', async () => {
  await repo.delete(1)
  const users = await repo.list()
  expect(users.length).toEqual(0)
})
