This is a basic math-based quiz game where the player answers multiplication questions. Here's a breakdown of how it works:

### Key Variables:

1. **gameOn**: Tracks if the game is currently running (`true`) or not (`false`).
2. **score**: The player's score, starting at 0.
3. **time**: The remaining time in seconds, starting at 60.
4. **countdownInterval**: Holds the interval ID for the countdown timer.
5. **correctAnswer**: Stores the correct answer to the current multiplication question.

### Main Functionalities:

#### 1. **Start/Reset Button:**

- When the "start-reset" button is clicked:
  - If the game is already running (`gameOn` is `true`), the page is reloaded.
  - If the game is not running (`gameOn` is `false`), the button text changes to "Reset Game," `gameOn` is set to `true`, and the game starts by calling `startGame()`.

#### 2. **Start Game:**

- When the game starts:
  - The score and the time remaining are displayed.
  - Two random numbers between 2 and 10 are generated and multiplied to form the question. The result is stored in `correctAnswer`.
  - Three incorrect answers are generated randomly and stored in a set to ensure uniqueness.
  - These incorrect answers are combined with the correct answer and randomly placed in four clickable answer boxes (`box1` to `box4`).
  - Clicking an answer box checks if the selected answer is correct using `checkAnswer()`.

#### 3. **Check Answer:**

- When an answer is clicked:
  - If the answer is correct:
    - The score is incremented, displayed, and the "correct" message is shown for 1 second.
    - The game continues with a new question.
  - If the answer is incorrect:
    - An "incorrect" message is shown for 1 second, but the game continues with the same question.

#### 4. **Countdown Timer:**

- The timer starts when the game starts. It decrements every second via the `countDown()` function.
- If time reaches 0, the game ends by calling `gameOver()`.

#### 5. **Game Over:**

- When the game ends:
  - The "Game Over" message and final score are displayed.
  - The answer boxes are cleared and deactivated.
  - The player can click the "start-reset" button to restart the game.

#### 6. **Reload Game:**

- This function resets the game state (score, time) and hides the game-over message when the player decides to restart the game.

### Flow Summary:

- The game starts when the "start-reset" button is clicked.
- A random multiplication question appears, and the player selects an answer.
- The timer counts down, and the game continues with new questions until time runs out.
- Once the game is over, the player can restart it by clicking the button again.
