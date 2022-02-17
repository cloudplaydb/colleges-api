const express = require('express')

module.exports = {
    getSchoolCourses: (req, res) => {
        const schoolCourses = 
        {
            colleges: 
            [
                {
                    name: 'Boston College',
                    courses: 
                    [
                        {
                            courseId: 101,
                            title: 'Masters in Computer Science',
                            credits: 4.0
                        },
                        {
                            courseId: 105,
                            title: 'Digital Marketing and Arts',
                            credits: 3.0
                        },
                        {
                            courseId: 109,
                            title: 'Breakeven analysis in post pandemic era',
                            credits: 1.0
                        }
                    ]
                }, 
                {
                    name: 'MIT',
                    courses: 
                    [
                        {
                            courseId: 311,
                            title: 'Masters in Robotics',
                            credits: 6.0
                        },
                        {
                            courseId: 521,
                            title: 'Space travel and Crisis engineering',
                            credits: 2.0
                        },
                        {
                            courseId: 355,
                            title: 'Aging and shrinking grey matter',
                            credits: 1.0
                        },

                    ]
                },
                {
                    name: 'Harvard University',
                    courses: 
                    [
                        {
                            courseId: 305,
                            title: 'Masters in Robotics',
                            credits: 4.0
                        },
                        {
                            courseId: 375,
                            title: 'Evolutionary Medicine Internship',
                            credits: 2.0
                        },
                        {
                            courseId: 385,
                            title: 'Web 3.0 and Metaverse',
                            Credits: 3.0
                        }
                    ]
                },
            ]
        }

        return res.status(200).json({ schoolCourses: schoolCourses })
    }
}