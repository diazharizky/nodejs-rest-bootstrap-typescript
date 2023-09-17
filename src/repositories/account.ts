import { repositories } from '../interfaces'
import { AccountId, Account } from '../models'

export class AccountRepository implements repositories.Account {
  private accounts: Account[]

  constructor() {
    this.accounts = []
  }

  async get(id: AccountId): Promise<Account> {
    return this.accounts[id - 1]
  }

  async list(): Promise<Account[]> {
    return this.accounts
  }

  create(newAccount: Account) {
    this.accounts.push(newAccount)
  }

  update(existingAccount: Account) {
    this.accounts[existingAccount.id - 1] = existingAccount
  }

  delete(id: AccountId) {
    this.accounts.splice(id - 1, 1)
  }
}
