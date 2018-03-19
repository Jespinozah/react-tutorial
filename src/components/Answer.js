import React from 'react';

const Answer = (props)=> {



    return (
      <div className="col s5">
          {props.selectedNumbers.map((number, i)=>
            <span key= {i} className = "chip number" onClick = {()=>props.unselectNumber(number)}>{number}</span>
          )}
      </div>
    );
}

export default Answer;
