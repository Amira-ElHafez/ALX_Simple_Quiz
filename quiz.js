// Step 1: Declare the checkAnswer function
function checkAnswer() {
    // Step 2: Define the correct answer
    const correctAnswer = "4";

    // Step 3: Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = selectedOption ? selectedOption.value : null;

    // Step 4: Provide feedback based on the user's answer
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; // Optional: Add some color to the feedback
    } else if (userAnswer) {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red"; // Optional: Add some color to the feedback
    } else {
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange"; // Optional: Add some color for no selection
    }
}

// Step 5: Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);