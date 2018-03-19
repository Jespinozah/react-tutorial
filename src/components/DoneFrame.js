import React from 'react';


const DoneFrame = (props) => {


    return (
      <div className="col s5">
        <h2>{props.doneStatus}</h2>
     <a className="waves-effect waves-light btn" onClick={props.resetGame}>Play Again</a>

      </div>
    );
}

export default DoneFrame;
