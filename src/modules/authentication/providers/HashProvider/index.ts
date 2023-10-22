import { container } from 'tsyringe'

import { BCryptHashProvider } from './implementations/BCryptHashProvider'
import { type IHashProvider } from './models/IHashProvider'

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider)
