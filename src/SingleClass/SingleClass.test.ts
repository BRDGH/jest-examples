import { SingleClass } from './SingleClass'

describe('SingleClass', () => {
  describe('With constructor', () => {
    let singleClass: SingleClass

    beforeEach(() => {
      singleClass = new SingleClass()
    })

    it('public method', () => {
      const num = 3
      expect(singleClass.mul2public(num)).toBe(num * 2)
    })

    it('mock public method', () => {
      const expected = 42
      const num = 3
      jest.spyOn(SingleClass.prototype, 'mul2public').mockReturnValueOnce(expected)
      const received = singleClass.mul2caller(num)
      expect(received).not.toBe(num * 2)
      expect(received).toBe(expected)
    })

    it('protected method', () => {
      const num = 3
      expect(singleClass['mul3protected'](num)).toBe(num * 3)
    })

    it('mock protected method', () => {
      const expected = 42
      const num = 3
      singleClass['mul3protected'] = jest.fn().mockReturnValueOnce(expected)
      const received = singleClass.mul3caller(num)
      expect(received).not.toBe(num * 3)
      expect(received).toBe(expected)
    })

    it('private method', () => {
      const num = 4
      expect(singleClass['mul4private'](num)).toBe(num * 4)
    })

    it('mock private method', () => {
      const expected = 42
      const num = 3
      singleClass['mul4private'] = jest.fn().mockReturnValueOnce(expected)
      const received = singleClass.mul4caller(num)
      expect(received).not.toBe(num * 4)
      expect(received).toBe(expected)
    })

    it('static method', () => {
      const num = 3
      expect(SingleClass.mul5static(num)).toBe(num * 5)
    })

    it('mock static method', () => {
      const expected = 42
      const num = 3
      jest.spyOn(SingleClass, 'mul5static').mockReturnValueOnce(expected)
      const received = singleClass.mul5caller(num)
      expect(received).not.toBe(num * 5)
      expect(received).toBe(expected)
    })
  })
})
