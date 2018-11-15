export interface NewPet {
  /** A name for pet */
  name: string
  /** Comma-separated tag name */
  tag?: string
}

export interface Pet extends NewPet {
  /** A unique ID for pet */
  id: number
}

export interface ErrorResponse {
  /**
   * Error code
   * @TJS-type integer
   */
  code: number
  message: string
}

export const definitions: any = {}
export const refs: any = {}
