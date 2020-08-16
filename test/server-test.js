const request = require('supertest')
const expect = require('chai').expect
const {before, describe, it} = require('mocha')

const app = require('../server')
let server

describe('Test Server', () => {
    before(() => {
        server = request(app)
    })

    describe('Get /',  () => {
        it('Should return OK', async () => {
            const res = await server.get('/')
            expect(res.status).to.equal(200)
            expect(res.body.message).to.equal('OK')
        })
    })
    
    describe('Post /', () => {
        it('Should return OK with POST', async () => {
            const res = await server.post('/')
            expect(res.status).to.equal(200)
            expect(res.body.message).to.equal('OK with POST')
        })
    })
})