APP name - QuizzyBEE

implemeted a timer for each question of 30 sec using useEffect and timer clean upo function to avoid un synchronuzation of UI and functionality

useCallback - used this hook in place of useEffect hook for functions that should not be executed again after component rerendering. useCallback return a obj to the function that previously existing and not pointing to new duplicate function that is usually created
in file Quiz.jsx

consider the below functionality where the user does choose any answer instead skips the question for which we need to store a null answer selected for score caluculation

const handleSelectAnswer = useCallback(function handleSelectAnswer(
selectedAnswer
) {
setUserAnswers((prevUserAnswers) => {
return [...prevUserAnswers, selectedAnswer];
});
},
[]);

const handleSkipAnswer = useCallback(
() => handleSelectAnswer(null),
[handleSelectAnswer]
);

Here, useCallBack is used because the function should not be created in duplicate again

Use of Key as unmount and mount trick:
keys are not only used for components/elements carrying list items it can also be used to un-mount and mount a component when some value changes. using key here un-mounts the timer from old component and mounts to new componenet instance(new Question )

in Quiz.jsx
<QuestionTimer
key={activeQuestionIndex}
timeout={30000}
onTimeout={handleSkipAnswer}
/>
