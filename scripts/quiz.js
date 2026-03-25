
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: "4"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const current = questions[currentQuestionIndex];

        document.getElementById("question").innerText = current.question;

        const optionsDiv = document.getElementById("options");
        optionsDiv.innerHTML = "";

        current.options.forEach(option => {
            optionsDiv.innerHTML += `
                <label>
                    <input type="radio" name="answer" value="${option}"> ${option}
                </label><br>
            `;
        });
    }

    document.getElementById("submitBtn").addEventListener("click", function() {
        const options = document.getElementsByName("answer");
        let selected = "";

        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                selected = options[i].value;
            }
        }

        const result = document.getElementById("result");

        if (selected === "") {
            result.innerText = "Please select an option!";
            return;
        }

        if (selected === questions[currentQuestionIndex].answer) {
            result.innerText = "Correct ✅";
            score++;
        } else {
            result.innerText = "Wrong ❌";
        }

        currentQuestionIndex++;

        setTimeout(() => {
            if (currentQuestionIndex < questions.length) {
                result.innerText = "";
                loadQuestion();
            } else {
                document.querySelector(".quiz-container").innerHTML =
                    `<h2>Your Score: ${score}/${questions.length}</h2>`;
            }
        }, 1000);
    });

    loadQuestion();
