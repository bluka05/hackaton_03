const quizQuestions = [
    {
        club: "Real Madrid",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "Spain"
    },

    {
        club: "Manchester United",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "England"
    },

    {
        club: "River Plate",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "Argentina"
    },

    {
        club: "River Plate",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "Spain"
    },

    {
        club: "Liverpool",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "England"
    },

]

let score = 0;

const container = document.getElementById("container")

for (const currentQuestion of quizQuestions) {
    const section = document.createElement("section")

    const club = document.createElement("h2")
    club.textContent = currentQuestion.club
    section.appendChild(club)

    const answersContainer = document.createElement("div")

    for (answer of currentQuestion.options) {
        const answerBtn = document.createElement("button")
        answerBtn.textContent = answer
        answersContainer.appendChild(answerBtn)
    }

    section.appendChild(answersContainer)

    const answerValidation = document.createElement("h4")
    section.appendChild(answerValidation)
    

    container.appendChild(section)
}