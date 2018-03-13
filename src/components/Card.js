import React, { Component } from 'react';

class Card extends Component {


  render() {
    return (
      <div style={{margin: '1em'}}>
        <img width="75" src={this.props.avatar_url} alt="avatar"/>
        <div style={{display: 'inline-block', margin: 10}}>
          <div style={{fontSize:'1.25em', fontWeight:'bold'}}>
            {this.props.name}
          </div>
          <div>
            {this.props.company}
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
