import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: ''}

    // this is SearchBar
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
          value={this.props.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button className="btn btn-secondary" type="submit">Submit</button>
        </span>
      </form>
    )
  }
}
