const testingArray = require('./iterables_arrays');
test('should test about the values present in array', () => {
    expect(testingArray).toContain('Dhruv');
})
