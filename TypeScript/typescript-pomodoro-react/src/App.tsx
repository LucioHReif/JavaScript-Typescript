import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={3000} // 25min
        shortRestTime={600} // 5min - For each pomodoro one shortRestTime
        longRestTime={900} // 15min
        cycles={4} // For each end of cycle one longRestTime
      />
    </div>
  );
}

export default App;
