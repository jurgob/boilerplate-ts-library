import DummyClass from '../src/library'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('DummyClass is instantiable', () => {
    expect(new DummyClass({ configParam: 'myValue' })).toBeInstanceOf(DummyClass)
  })
  it('', () => {
    const myInstance = new DummyClass({ configParam: 'myValue' })
    expect(myInstance.getConfigParam()).toBe('myValue')
  })
})
