import repos from '../repositories'

export default async () => {
  const user = await repos.user.get(1)
}
