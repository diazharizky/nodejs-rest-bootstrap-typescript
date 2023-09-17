import { AccountRepository } from '../repositories'
import { Account } from '../models'

export const createArticle = (newAccount: Account) => {
  const repo = new AccountRepository()

  repo.create(newAccount)
}
