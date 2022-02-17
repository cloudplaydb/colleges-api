const express = require('express')
const router = express.Router()

const schoolCoursesService = require('../services/school-courses.service')

router.get('/', schoolCoursesService.getSchoolCourses)

module.exports = router