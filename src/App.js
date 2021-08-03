import { useState } from "react";
import { FeedbackOptions } from "./Components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Components/Statistics/Statistics";
import { Section } from "./Components/Section/Section";
import { Notification } from "./Components/Notification/Notification ";
import options from "./Components/Options";

function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const handleChange = (option) => {
    switch (option) {
      case "good":
        setGoodFeedback(() => good + 1);
        break;

      case "neutral":
        setNeutralFeedback(() => neutral + 1);
        break;

      case "bad":
        setBadFeedback(() => bad + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / title);
  };

  const title = countTotalFeedback();
  const percentage = countPositiveFeedbackPercentage();

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleChange} />
      <Section title="Statistics">
        {title > 0 ? (
          <Statistics
            positiveFeedback={good}
            neutralFeedback={neutral}
            negativeFeedback={bad}
            countSum={title}
            countPercentage={percentage}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </Section>
  );
}

export default App;
