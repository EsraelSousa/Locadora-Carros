import 'reflect-metadata'
import 'express-async-errors'
import 'dotenv/config'

import bodyParser from 'body-parser'
import express from 'express'
import { create } from 'express-handlebars'
import session from 'express-session'

import { authConfig } from '@config/auth'

import { routes } from './routes'

import '@shared/container'

const app = express()

const { engine: handlebars } = create({
  extname: '.hbs'
})

app.use(
  session({
    name: 'test session',
    secret: authConfig.secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 15
    }
  })
)

app.engine('.hbs', handlebars)
app.set('view engine', '.hbs')
app.set('views', './views/site')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(routes)

export { app }
