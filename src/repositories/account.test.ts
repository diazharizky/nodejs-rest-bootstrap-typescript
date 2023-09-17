import { AccountRepository } from '.'
import { Account } from '../models'

const repo = new AccountRepository()

test('test create and list', async () => {
  const newAccount: Account = {
    id: 1,
    username: 'fakeusername',
    fullName: 'Fake Fullname',
    email: 'fake@email.com',
    createdAt: new Date().toISOString(),
  }

  await repo.create(newAccount)
  const accounts = await repo.list()

  expect(accounts.length).toEqual(1)
})

test('test update', async () => {
  const now = new Date().toISOString()

  const existingAccount: Account = {
    id: 1,
    username: 'fakeusername',
    fullName: 'Fake Fullname',
    email: 'fake@email.com',
    createdAt: new Date().toISOString(),
  }

  existingAccount.username = 'new_fakeusername'
  existingAccount.updatedAt = now

  await repo.update(existingAccount)
  const account = await repo.get(existingAccount.id)

  expect(account.username).toEqual(existingAccount.username)
})

test('test delete', async () => {
  await repo.delete(1)
  const accounts = await repo.list()
  expect(accounts.length).toEqual(0)
})
