import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer
        //keys are not only used for components/elements carrying list items it can also be used to un-mount and mount a component when some value changes. using key here un-mounts the timer from old component and mounts to new componenet instance(new Question )
        timeout={10000}
        onTimeout={onSkipAnswer}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
