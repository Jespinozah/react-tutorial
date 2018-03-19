import React from 'react';
import _ from 'lodash';


const Starts = (props) => {


    return (
      <div className="col s5">
        {_.range(props.numberOfStars).map(i =>
          <i key = {i} className="material-icons">star</i>
        )}
      </div>
    );
}

export default Starts;
