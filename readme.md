# QuizzyBEE - A React Quiz Application

QuizzyBEE is an interactive and dynamic quiz application built using React. The app allows users to test their knowledge by answering timed questions. It showcases modern React features such as hooks, state management, and functional components. Below are the key features and implementation details of QuizzyBEE.

![QuizzyBEE Demo](screenshots/quizzy.gif)

## Features

### 1. Timer for Each Question

- **Implementation**: The timer is implemented using the `useEffect` hook with a cleanup function to ensure synchronization between the UI and functionality.
- **Unmount and Mount Trick**: The `key` attribute is used to unmount and remount the timer component for each new question. This ensures that the timer resets correctly when the question changes.
  ```jsx
  <QuestionTimer
    key={activeQuestionIndex}
    timeout={30000}
    onTimeout={handleSkipAnswer}
  />
  ```

### 2. Handling User Answers

- **Answer Selection**: Users can select an answer, which is stored in the `userAnswers` state.
- **Skipping Questions**: If a user skips a question, a `null` value is stored in the `userAnswers` state for score calculation purposes.

  ```jsx
  const handleSelectAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );
  ```

### 3. Optimizing Function Re-Renders

- **Using `useCallback`**: The `useCallback` hook is used to memoize functions that should not be recreated unnecessarily on component re-renders. This improves performance and prevents creating duplicate functions.
  - Example:
    ```jsx
    const handleSelectAnswer = useCallback((selectedAnswer) => {
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, selectedAnswer]);
    }, []);
    ```

### 4. Dynamic Question Rendering

- **Key-Based Re-Mounting**: The `key` attribute is used to ensure each question is treated as a new instance, which helps in resetting components like timers.

## Key Learnings

- **Efficient State Management**: Handling state updates for dynamic features like timers and user answers.
- **Hooks Mastery**:
  - Leveraging `useEffect` for side effects and cleanup.
  - Using `useCallback` for optimizing function re-renders.
- **Component Lifecycle Understanding**: Managing component unmounting and remounting using the `key` attribute.
- **Clean Code Practices**: Writing reusable and maintainable code for scalable applications.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quizzybee.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quizzybee
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Future Enhancements

- Add support for multiple categories of quizzes.
- Implement user authentication and leaderboard features.
- Enhance the UI/UX with animations and themes.

## Contributing

Feel free to fork the repository and submit pull requests for enhancements or bug fixes.

## License

This project is licensed under the MIT License.

---

Enjoy quizzing with QuizzyBEE!
