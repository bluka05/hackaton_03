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
        club: "Arsenal",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "England"
    },

    {
        club: "Liverpool",
        options: ["England", "Spain", "Argentina"],
        correctAnswer: "England"
    },

]

let score = 0;
const scoreEl = document.getElementById("score")

const container = document.getElementById("container")

for (const currentQuestion of quizQuestions) {
    const section = document.createElement("section")
    section.className = "section"

    const club = document.createElement("h2")
    club.textContent = currentQuestion.club
    section.appendChild(club)

    console.log(section)

    const answersContainer = document.createElement("div")
    answersContainer.className = "answer-btn-containers"
    
    for (answer of currentQuestion.options) {
        const answerBtn = document.createElement("button")
        answerBtn.textContent = answer
        answersContainer.appendChild(answerBtn)
        
        answerBtn.addEventListener("click", () => {
            if (answerBtn.textContent === currentQuestion.correctAnswer) {
                score++
                answerValidation.textContent = "Correct!"
            } else {
                answerValidation.textContent = "Wrong!"
            }
            scoreEl.textContent = score
        })
    }

    section.appendChild(answersContainer)

    const answerValidation = document.createElement("h4")
    section.appendChild(answerValidation)
    
    container.appendChild(section)
}


