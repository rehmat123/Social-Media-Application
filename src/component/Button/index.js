
import React, { Children, Component } from 'react';

export default class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
        tab: 'veen',
    }
    
}

  render() {

    return (
      <li className="nav-item">
    <a className= {'nav-link ' + this.props.active} data-toggle="tab" name={this.props.name} onClick={this.props.handleChange('dsdsa')} role="tab">
      {Children.toArray(this.props.children)}
    </a>
  </li>
    )
  }
}

