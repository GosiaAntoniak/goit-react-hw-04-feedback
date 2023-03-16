import React, {Component, useState} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import '../index.css';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNautral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (option) => {
    option === "good" && setGood(good + 1);
    option === "neutral" && setNautral(neutral + 1);
    option === "bad" && setBad(bad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / (good + neutral + bad)) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={handleFeedback} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
