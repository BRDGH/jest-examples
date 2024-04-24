export class SingleClass {
  constructor() {
    //
  }

  mul2caller(num: number): number {
    return this.mul2public(num)
  }

  mul2public(num: number): number {
    const MULTIPLIER = 2
    return num * MULTIPLIER
  }

  mul3caller(num: number): number {
    return this.mul3protected(num)
  }

  protected mul3protected(num: number): number {
    const MULTIPLIER = 3
    return num * MULTIPLIER
  }

  mul4caller(num: number): number {
    return this.mul4private(num)
  }

  private mul4private(num: number): number {
    const MULTIPLIER = 4
    return num * MULTIPLIER
  }

  mul5caller(num: number): number {
    return SingleClass.mul5static(num)
  }

  static mul5static(num: number): number {
    const MULTIPLIER = 5
    return num * MULTIPLIER
  }
}
