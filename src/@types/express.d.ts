declare namespace Express {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Request {
    user: {
      id: number
    }
    session: {
      profile: {
        id: number
        name: string
        email: string
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface Response {
    session: {
      profile: {
        id: number
        name: string
        email: string
      }
    }
  }
}
