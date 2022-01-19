// import Job from '../models/Job.js'
// import { StatusCodes } from 'http-status-codes'
// import {
//   BadRequestError,
//   NotFoundError,
//   UnAuthenticatedError,
// } from '../errors/index.js'
// import checkPermissions from '../utils/checkPermissions.js'
// import mongoose from 'mongoose'
// import moment from 'moment'

const createJob = async (req, res) => {
  res.send('Create job')
}
const getAllJobs = async (req, res) => {
  res.send('Get all jobs')
}
const updateJob = async (req, res) => {
  res.send('update job')
}
const showStats = async (req, res) => {
  res.send('show stats')
}
const deleteJob = async (req, res) => {
  res.send('delete job')
}
export { createJob, getAllJobs, updateJob, showStats, deleteJob }
