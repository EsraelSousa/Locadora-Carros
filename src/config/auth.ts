import 'dotenv/config'
import path from 'path'

export const authConfig = {
  secret: String(process.env.APP_SECRET),
  sessionsFolder: path.resolve(__dirname, '../../', 'sessions')
}
