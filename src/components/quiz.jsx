const segment = {
  basic: "basic",
  medium: "medium",
  advanced: "advanced",
};

export const quiz =  {
  "quizTitle": "Vaccines & Immunity Quiz",
  "quizSynopsis": "Do you know about the mechanisms of immunity, how vaccines work, or how many people must be vaccinated for a population to be free from a disease? Take this quiz to find out!",
  "questions": [
    {
      "question": "Immunity helps prevent the spread of a virus within a population. How many people need to be immune to SARS-CoV-2 to drastically slow the spread of the virus?",
    //   "questionPic": "https://dummyimage.com/600x400/000/fff&text=X",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "30%",
        "50%",
        "75%",
        "100% ",
        "Only the vulnerable and symptomatic people need to be immune.",
        "We do not know yet."
      ],
      "correctAnswer": "6",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answer is that we do not know yet.",
      "explanation": "Source: https://www.jhsph.edu/covid-19/articles/achieving-herd-immunity-with-covid19.html",
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
        "We do not know yet."
      ],
      "correctAnswer": "6",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answer is that we do not know yet.",
      "explanation": "Source: https://www.thelancet.com/journals/laninf/article/PIIS1473-3099(20)30783-0/fulltext",
      "point": "20",
      "segment": segment.basic
    },
    {
      "question": "Immunity means... (select all that apply)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "You may have less severe symptoms when exposed to a pathogen.",
        "You are not likely to spread an infection to others.",
        "You cannot get infected by a pathogen.",
        "You have never been infected by a pathogen.",
        "Your immune system knows how to fight off a pathogen.",
        "You are less likely to become sick after being exposed to a pathogen"
      ],
      "correctAnswer": [1,2,5,6],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answers are choices 1, 2, 5, and 6.",
      "explanation": "",
      "point": "10"
    },
    {
      "question": "How do you reach immunity against a virus? (select all that apply)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Through infection with the virus followed by recovery",
        "Through vaccination",
        "Genetic factors that don’t involve the immune system",
        "We cannot reach immunity against all viruses because some of them constantly evolve",
        "Through medication and treatment",
        "With antibiotics"
      ],
      "correctAnswer": [1,2,4],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answers are choices 1, 2, and 4.",
      "explanation": "",
      "point": "30",
      "segment": segment.medium
    },
    {
      "question": "Vaccines protect an individual from infection when exposed to the virus. What biological information is usually contained in a vaccine? (select all that apply)",
      "questionType": "text",
      "answerSelectionType": "multiple",
      "answers": [
        "Genomic material (DNA or RNA) of the virus",
        "Dead version of the virus",
        "Human antibody against the virus",
        "Lab made substances that mimic the virus",
        "Weakened version of the virus",
        "Fully infectious viruses capable of making someone sick"
      ],
      "correctAnswer": [1,2,4,5],
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answers are choice 1, 2, 4, and 5.",
      "explanation": "",
      "point": "20"
    },
    {
      "question": "When are vaccines usually given to an individual?",
      "questionType": "text",
      "answerSelectionType": "single",
      "answers": [
        "All vaccines we ever need are given at birth",
        "When showing symptoms of an infection",
        "Before having been exposed to a pathogen, to prevent an infection",
        "After an infection, to prevent a re-infection",
        "All vaccines we ever need are given when we are adults",
        "At the end of an infection, but before we recover"
      ],
      "correctAnswer": "3",
      "messageForCorrectAnswer": "Correct answer. Good job.",
      "messageForIncorrectAnswer": "Incorrect answer. The correct answer is before having been exposed to a pathogen, to prevent an infection.",
      "explanation": "",
      "point": "20"
    },
    {
        "question": "When did vaccines start to be used as a method to prevent the spread of diseases and pathogens?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
            "Before the 1500s",
            "1500s",
            "1600s",
            "1700s",
            "1800s",
            "1900s",
            "2000s"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is before the 1500s.",
        "explanation": "Source: https://www.historyofvaccines.org/timeline/all",
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
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is false.",
        "explanation": "",
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
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is false.",
        "explanation": "",
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
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is false.",
        "explanation": "",
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
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is false.",
        "explanation": "",
        "point": "20"
    },
    {
        "question": "How many vaccine models are currently being developed for SARS-Cov-2?",
        "questionType": "text",
        "answerSelectionType": "single",
        "answers": [
          "13",
          "22",
          "98",
          "177",
          "580",
          "1023"
        ],
        "correctAnswer": "4",
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. The correct answer is 177.",
        "explanation": "",
        "point": "20"
    },
    {
        "question": "Vaccine development consists of clinical trials. These are individual phases which test and improve different elements in the development of the vaccine. Which aspects need to be checked or completed before a vaccine becomes used? (select all that apply)",
        "questionType": "text",
        "answerSelectionType": "multiple",
        "answers": [
          "Effectiveness",
          "Toxicity",
          "Tests on at least 30,000 people",
          "Long and short term side effects",
          "Individual responses based on health condition (diabetic, cancer, pregnant, etc)",
          "Animal testing"
        ],
        "correctAnswer": [1,2,3,4],
        "messageForCorrectAnswer": "Correct answer. Good job.",
        "messageForIncorrectAnswer": "Incorrect answer. The correct answers are choices 1, 2, 3, and 4.",
        "explanation": "",
        "point": "20"
    },
  ]
}