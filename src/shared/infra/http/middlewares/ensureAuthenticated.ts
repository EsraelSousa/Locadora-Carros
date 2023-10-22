import { type NextFunction, type Request, type Response } from 'express'

export default async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  if (request.session.profile) {
    next()
  } else {
    response.redirect('/login')
  }
}
