import React from 'react';

const Button = (props) => {
    let button;

    switch (props.answerIsCorret) {
      case true:
        button = <a className="waves-effect waves-light btn green"
            onClick={props.acceptAnswer}
          ><i className="material-icons">check</i></a>;

        break;
      case false:
        button = <a className="waves-effect waves-light btn red"><i className="material-icons">close</i></a>;
        break;
      default:
        button= <a className="waves-effect waves-light btn"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}>=</a>;

        break;

    }


    return (
      <div className="col s2">
        {button}
      <br/>
      <br/>
        <a onClick={props.redraw} disabled= {props.redraws===0} className="waves-effect waves-light btn-small">
          <i className="material-icons">refresh</i>{props.redraws}
        </a>
      </div>

    );
}

export default Button;
