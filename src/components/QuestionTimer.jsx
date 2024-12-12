import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("SETTING TIMEOUT");
    const timer = setTimeout(onTimeout, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  //   useEffect(() => {
  //     // This interval is being executed twice recognized with progress bar completing too fast i.e.. 5 sec where choosen was 10 sec because strictmode is running which executes any component twice which shoes a bug
  //     console.log("SETTING INTERVAL");
  //     setInterval(() => {          Because we are not cleaning up the timer
  //       setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
  //     }, 100);
  //   }, []);

  useEffect(() => {
    console.log("SETTING INTERVAL");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress id="question-time" max={timeout} value={remainingTime} />;
}
