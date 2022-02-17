const express = require('express')
const router = express.Router()

const schoolService = require('../services/schools.service')

// router.get('/', (req, res, next) => {
//     res.send("This is the school request")
// }) 

router.get('/', schoolService.getSchools)

module.exports = router