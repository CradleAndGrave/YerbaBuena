import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.handleZoomChange = this.handleZoomChange.bind(this);
  }

  handleZoomChange(e) {
    if (this.props.onZoomChange) {
      this.props.onZoomChange(e.target.value);
    }
  }

  render() {
    const zoomRadios = ['Hours', 'Days', 'Months', 'Years'].map((value) => {
      const isActive = this.props.zoom === value;
      return (
        <label
          key={value}
          className={`radio-label ${isActive ? 'radio-label-active' : ''}`}
        >
          <input
            type="radio"
            checked={isActive}
            onChange={this.handleZoomChange}
            value={value}
          />
          {value}
        </label>
      );
    });

    return (
      <div className="zoom-bar">
        <b>Zooming: </b>
        {zoomRadios}
      </div>
    );
  }
}

Toolbar.propTypes = {
  // onZoomChange: PropTypes.function.isRequired,
  zoom: PropTypes.string.isRequired
};
