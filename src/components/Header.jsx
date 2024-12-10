import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Quizzy Beee !" />
      <h1>QuizzyBee</h1>
    </header>
  );
}
