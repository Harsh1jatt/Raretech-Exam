
// Simulated user data for login
const users = [
    { username: "1", password: "1" },
    { username: "Harsh", password: "178070" },
    { username: "Sandeep", password: "178072" },
    { username: "Gaurav", password: "178071" },
];

let currentUser = null;

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    console.log(usernameInput, passwordInput);
    // Check if user exists

    currentUser = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (currentUser) {
        document.getElementById('loginForm').style.display = 'none';
        // document.getElementById('examQuestions').style.display = 'block';
        document.querySelector(".info_box").classList.add("activeInfo");
        // document.querySelector(".info_box").style.display = "block";
        loadQuestions();
    } else {
        alert('Invalid username or password');
    }
}

function loadQuestions() {
    const questionForm = document.getElementById('questionForm');

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
                    <p>${index + 1}. ${question.question}</p>
                `;

        if (question.options) {
            question.options.forEach(option => {
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = `question${index}`;
                radioInput.value = option;
                questionElement.appendChild(radioInput);

                const optionLabel = document.createElement('label');
                optionLabel.textContent = option;
                questionElement.appendChild(optionLabel);
            });
        }
        questionForm.appendChild(questionElement);
    });
}

function submitExam() {
    if (!currentUser) {
        alert('Please log in to submit the exam.');
        return;
    }

    const answers = [];
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            answers.push({ question: question.question, answer: selectedOption.value });
        }
    });

    // Store answers in local storage (for demonstration purposes)
    // localStorage.setItem(currentUser.username, JSON.stringify(answers));


    alert('Exam submitted! Answers are saved in local storage.');
}