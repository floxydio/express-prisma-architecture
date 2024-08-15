import express, { Application } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { notFoundHandler, errorHandler } from './src/middleware/error_handler'

const app: Application = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use(notFoundHandler) // 404 
app.use(errorHandler) // 500


export default app