import { Component } from 'react';
//
import { Statistics } from 'components/feedback/statistics';
import { FeedbackOptions } from './feedbackOptions';
import { Section } from './section';
import { Notification } from './notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = evt => {
    const name = evt.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const ArrCountFeedback = Object.values(this.state);
    let totalFeedback = 0;
    for (let i = 0; i < ArrCountFeedback.length; i += 1) {
      totalFeedback += ArrCountFeedback[i];
    }
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={this.handleIncrement} />
        <>
          {!this.countTotalFeedback() ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </>
      </Section>
    );
  }
}
