export const definitions: any = {}
export const refs: any = {}

export interface NewPet {
  /** A name for pet */
  name: string
  /** Comma-separated tag name */
  tag?: string
}

/**
 * Registered pet
 */
export interface Pet extends NewPet {
  /** A unique ID for pet */
  id: number
}

export type Pets = Pet[]

export interface ErrorResponse {
  /**
   * Error code
   * @TJS-type integer
   */
  code: number
  /**
   * Error message
   * @TJS-example something went wrong
   */
  message: string
}
