import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increamentCount = this.increamentCount.bind(this);
  }
  increamentCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>{this.props.render(this.state.count, this.increamentCount)}</div>
    );
  }
}

export default Counter;
