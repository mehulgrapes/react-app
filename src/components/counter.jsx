import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
    tags: ["tag1", "tag2", "tag3"]
  };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  render() {
    return (
      <div className="row align-items-center my-2">
        <div className="col">
          <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        </div>
        <div className="col">
          <button
            className="btn btn-success btn-sm mr-1"
            onClick={this.handleIncrement}
          >
            +
          </button>
          <button
            className="btn btn-success btn-sm mr-1"
            onClick={this.handledecrement}
          >
            -
          </button>
        </div>
        <div className="col">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
          {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        </div>
      </div>
    );
  }
  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };
  handledecrement = () => {
    if (this.state.value !== 0) {
      this.setState({ value: this.state.value - 1 });
    }
  };
  getBadgeClasses() {
    let classes = "badge badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
