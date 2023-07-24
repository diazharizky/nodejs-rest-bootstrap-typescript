import repos from '../repositories'
import { UserId } from '../models'

export default async (id: UserId) => {
  const user = await repos.user.get(id)
}
