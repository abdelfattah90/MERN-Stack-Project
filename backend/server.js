import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors'
import connectDB from './db/connect.js' // DB
import authRoutes from './routes/authRoutes.js' // ROUTERS
import jobsRoutes from './routes/jobsRoutes.js' // ROUTERS
import notFoundMiddleware from './middleware/not-found.js' // MIDDLEWARE
import errorHandlerMiddleware from './middleware/error-handler.js' // MIDDLEWARE

const app = express()
dotenv.config()
const PORT = process.env.PORT

app.use(express.json())

app.get('/', (req, res) => {
  res.send('')
})
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/jobs', jobsRoutes)

// MIDDLEWARE
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(PORT, () => {
      console.log('Server running ...')
    })
  } catch (error) {
    console.log(error)
  }
}
start()

// import morgan from 'morgan'

// import { dirname } from 'path'
// import { fileURLToPath } from 'url'
// import path from 'path'

// import helmet from 'helmet'
// import xss from 'xss-clean'
// import mongoSanitize from 'express-mongo-sanitize'

// // hello
// // db and authenticateUser

// // routers
// import authRouter from './routes/authRoutes.js'
// import jobsRouter from './routes/jobsRoutes.js'

// // middleware
// import authenticateUser from './middleware/auth.js'
