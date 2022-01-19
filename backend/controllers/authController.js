// import User from '../models/User.js'
// import { StatusCodes } from 'http-status-codes'
// import { BadRequestError, UnAuthenticatedError } from '../errors/index.js'
const register = (req, res) => {
  res.send('register user')
}
const login = (req, res) => {
  res.send('login user')
}
const updateUser = (req, res) => {
  res.send('updateUser')
}

export { register, login, updateUser }
