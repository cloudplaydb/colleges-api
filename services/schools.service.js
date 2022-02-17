const express = require('express')

module.exports = {
    getSchools: (req, res) => {
        const schools = {
            '1': 'School of Engineering and Computing',
            '2': 'School of Arts and Music',
            '3': 'School of Medicine and Dentistry',
            '4': 'Polytechnic School of Design',
            '5': 'School of Occupational Therapy'
        }

        return res.status(200).json({ schools: schools })
    }
}