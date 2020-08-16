const expect = require('chai').expect
const {describe, it} = require('mocha')
const { sum, multiplyer } = require('../utils/math')

describe('Test math method', () => {
    it('Should return a+b', () => {
        expect(sum(2,1)).to.equal(3)
    })
    it('Should return a*b', () => {
        expect(multiplyer(4,4)).to.equal(16)
    })
})
