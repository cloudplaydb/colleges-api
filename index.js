const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const schoolCourses = require('./routes/school-courses')
const schools = require('./routes/schools')

app.use('/schoolCourses', schoolCourses)
app.use('/schools', schools)

module.exports = app