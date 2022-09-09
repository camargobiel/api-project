import request from 'supertest'

describe('successful requests', () => {
  it('/posts should get all',async () => {
    await request('localhost:6060').get('/posts').expect(200)
  })
})