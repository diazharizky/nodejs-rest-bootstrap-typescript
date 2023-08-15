import { FatalResponse } from '.'

const errMessage = 'some error message'
const resp = FatalResponse(new Error(errMessage))

test('fatal response result', () => {
  expect(resp.ok).toEqual(false)
  expect(resp.error?.message).toEqual(errMessage)
})
