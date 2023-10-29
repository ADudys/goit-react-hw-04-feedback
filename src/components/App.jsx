import { Statistics } from './Statistics/Statistics.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Notification } from './Notification/Notification.jsx';
import { Section } from './Section/Section.jsx';
import React, { useState } from 'react';

export default function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const total = () => {
    return Object.values(state).reduce((ac, item) => (ac += item));
  };
  const positiveFeedback = () => {
    const res = Math.round((state.good / total()) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  function onLeaveFeedback(option) {
    setState((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  }

  const keys = Object.keys(state);
  const { good, neutral, bad } = state;

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={keys} onLeaveFeedback={onLeaveFeedback} />
        {total() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total()}
            positivePercentage={positiveFeedback()}
          />
        )}
      </Section>
    </>
  );
}
