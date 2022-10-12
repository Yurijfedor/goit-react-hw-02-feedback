import { Component } from 'react';
import { Box } from 'constans';
export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };

  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };

  render() {
    const { step } = this.props;

    return (
      <Box
        width="400px"
        pt={1}
        ml="auto"
        mr="auto"
        mt={5}
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by {step}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by {step}
        </button>
      </Box>
    );
  }
}
