const randomString = require('../index')

describe('Test randomString functionality', () => {
    test('test randomString returns a string type', () => {
        expect(typeof(randomString())).toBe('string')
    })
    test('Test a city doesnt exist', () => {
        expect(randomString()).not.toMatch(/Cordoba/)
    })
})