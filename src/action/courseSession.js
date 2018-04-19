
let QuizObject = [
    { 
        "sectionName": "Numerical Ability",
        "quiz": [
            {
                "question": "question01 Numerical",
                "questionImg": [
                    { "imgUrl": "https://www.drivecms.com/uploads/mcelroytutoring.com/12187929_1080265822005922_2253332009666211636_n.png" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "optA"
                    },
                    {
                        "optId": 2,
                        "name": "optB"
                    },
                    {
                        "optId": 3,
                        "name": "optc"
                    }
                ]
            },
            {
                "question": "question02 Numerical",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "dsfsdf"
                    },
                    {
                        "optId": 2,
                        "name": "dsd"
                    },
                    {
                        "optId": 3,
                        "name": "osdsptc"
                    }
                ]
            },
            {
                "question": "question03 Numerical",
                "questionImg": [
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "optA"
                    },
                    {
                        "optId": 2,
                        "name": "optB"
                    },
                    {
                        "optId": 3,
                        "name": "optc"
                    }
                ]
            }
        ] 
    }, 
    {
        "sectionName": "Reasoning Ability",
        "quiz": [
            {
                "question": "question01 Reasoning",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "sdsd"
                    },
                    {
                        "optId": 2,
                        "name": "dsd"
                    },
                    {
                        "optId": 3,
                        "name": "dsd"
                    }
                ]
            },
            {
                "question": "question02 Reasoning",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "optA"
                    },
                    {
                        "optId": 2,
                        "name": "optB"
                    },
                    {
                        "optId": 3,
                        "name": "optc"
                    }
                ]
            },
            {
                "question": "question03 Reasoning",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "optA"
                    },
                    {
                        "optId": 2,
                        "name": "optB"
                    },
                    {
                        "optId": 3,
                        "name": "optc"
                    }
                ]
            }
        ]
    }, 
    {
        "sectionName": "English Ability",
        "quiz": [
            {
                "question": "question01 English",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "dsd"
                    },
                    {
                        "optId": 2,
                        "name": "dsd"
                    },
                    {
                        "optId": 3,
                        "name": "sd"
                    }
                ]
            },
            {
                "question": "question02 English",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "dfdf"
                    },
                    {
                        "optId": 2,
                        "name": "efsf"
                    },
                    {
                        "optId": 3,
                        "name": "df"
                    }
                ]
            },
            {
                "question": "question03 English",
                "questionImg": [
                    { "imgUrl": "http://thecompetitioncircle.com/wp-content/uploads/2017/09/1-Dollarphotoclub_54825547.jpg" }
                ],
                "options": [
                    {
                        "optId": 1,
                        "name": "optA"
                    },
                    {
                        "optId": 2,
                        "name": "optB"
                    },
                    {
                        "optId": 3,
                        "name": "optc"
                    }
                ]
            }
        ]
    }
]

export function getQuizObject() {
    return (dispatch) => {
        dispatch({ type: "get_quiz_object", payload: QuizObject })
    }
}