const segment = {
  basic: "basic",
  medium: "medium",
  advanced: "advanced",
};

export const quiz =  {
  "quizTitle": "Vaccines & Immunity Quiz",
  "quizSynopsis": "synopsis goes here",
  "questions": [
    {
      "question": "Immunity helps prevent the spread of a virus within a population. How many people need to be immune to SARS-CoV-2 to drastically slow the spread of the virus?",
    //   "questionPic": "https://dummyimage.com/600x400/000/fff&text=X",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Only the vulnerable and symptomatic people need to be immune",
        "-30%",
        "-50%",
        "-75%",
        "100% "
      ],
      "correctAnswer": "4",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "20",
      "segment": segment.advanced
    },
    {
      "question": "How long does immunity against SARS-CoV-2 last?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "1-5 weeks",
        "Up to 3 months",
        "Up to 1 year",
        "Several years",
        "For life",
        "We do not know yet"
      ],
      "correctAnswer": "2",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "20",
      "segment": segment.basic
    },
    {
      "question": "Immunity means:",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "You did not show symptoms when infected with the virus",
        "You did not spread the virus to others when infected",
        "You will not get infected by the virus when exposed to it",
        "You have never been infected by the virus"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "10"
    },
    {
      "question": "How do you reach immunity against a virus?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Through infection with the virus followed by recovery",
        "Through vaccination",
        "Genetic factors",
        "There is no such thing as permanent immunity to viruses because most of them constantly evolve",
        "Through medication and treatment"
      ],
      "correctAnswer": [1,2,4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "30",
      "segment": segment.medium
    },
    {
      "question": "Vaccines protect an individual from infection when exposed to the virus. What biological information is usually contained in a vaccine?",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Proteins of the virus",
        "Genomic material (DNA or RNA) of the virus",
        "Dead version of the virus",
        "Human antibody against the virus",
        "Lab made substances that mimic the virus",
        "I don't know, I am guessing",
        "Weakened version of the virus"
      ],
      "correctAnswer": [1,2],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "20"
    },
    {
      "question": "When are vaccines usually given to an individual?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "Ideally at birth",
        "When showing symptoms of an infection",
        "Before having been exposed, to prevent an infection",
        "After an infection, to prevent a re-infection"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
      "explanation": "explanation goes here",
      "point": "20"
    },
    {
        "question": "When did vaccines start to be used as a method to prevent the spread of diseases and pathogens?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
            "1500s",
            "2000s"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "One possible treatment against viruses are antibiotics.",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "There is one vaccine that protects against all viruses.",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "There is one vaccine that protects against all SARS viruses.",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "There can only be one vaccine that successfully protects against SARS-CoV-2.",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "True",
          "False"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "How many vaccine models are currently being developed for SARS-Cov-2?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "13",
          "177",
          "1023"
        ],
        "correctAnswer": "2",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
    {
        "question": "Vaccine development consists of clinical trials. These are individual phases which test and improve different elements of in the development of the vaccine. Select all which needs to be insured or completed before a vaccine becomes used.",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "effectiveness",
          "toxicity",
          "tests on target population (at least 30 000 people)",
          "tests on animals",
          "long term side effects",
          "short term side effects",
          "individual responses to drug (pregnancy, cancer, diabetic)",
          "I don't know, I am guessing."
        ],
        "correctAnswer": [1,2,3,4,5,6],
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
        "explanation": "explanation goes here",
        "point": "20"
    },
  ]
}