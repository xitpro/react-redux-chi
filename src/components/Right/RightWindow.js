import React from 'react';

import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/profile.css';
import '../../assets/css/main.css';

const RightWindow = props => {
    return (
      <div className="thx-window">
      <div className="sub-title flex">
        <h1 id="eqTitle" className="eq-title">
          {props.nameProfileSelected}
        </h1>
      </div>
    </div>
    );
};

export default RightWindow;