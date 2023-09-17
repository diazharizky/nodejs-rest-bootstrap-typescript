import request from 'supertest'
import express from 'express'
import util from 'util'
import { ArticlesController, accountIdParam } from './articles'

const app = express()

const articlesPath = '/accounts/%s/articles'

app.use(
  util.format(articlesPath, `:${accountIdParam}`),
  new ArticlesController().router()
)

describe('articles controller', () => {
  describe('when requesting to the get article endpoint', () => {
    describe('and the api call succeed', () => {
      it('should return successful response', async () => {
        const resp = await request(app).get(util.format(articlesPath, 1) + '/1')
        expect(resp.statusCode).toEqual(200)
      })
    })
  })

  describe('when requesting to the create article endpoint', () => {
    describe('and the api call succeed', () => {
      it('should return successful response', async () => {
        const resp = await request(app).post(util.format(articlesPath, 1))
        expect(resp.statusCode).toEqual(200)
      })
    })
  })
})
