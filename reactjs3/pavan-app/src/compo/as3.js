import React, { useState, useEffect } from "react";

function CountdownTimer(props) {
  const [seconds, setSeconds] = useState(props.seconds);

  useEffect(() => {
    if (seconds > 0) {
      const countdown = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(countdown);
    }
  }, [seconds]);

  return (

    <div>
      {seconds === 0 ? (
        <p>Time is up!</p>
      ) : (
        <p>Countdown: {seconds} seconds</p>
      )}
    </div>

  );
}

export default CountdownTimer;
