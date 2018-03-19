import React from 'react';
import _ from 'lodash';

const Numbers =(props)=> {

    const numberClassName = (number)=>{
      if(props.usedNumbers.indexOf(number)>=0)
        return 'used';
      if(props.selectedNumbers.indexOf(number)>=0)
        return 'selected';
    }

    return (
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              {Numbers.list.map((number,i)=>
                <span key={i} className={'chip number ' + numberClassName(number)}
                    onClick= {()=>props.selectNumber(number)}>
                    {number}
                </span>
              )}
            </div>
        </div>
      </div>
    </div>
    );
}

Numbers.list= _.range(1,10);

export default Numbers;
