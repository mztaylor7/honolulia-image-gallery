import React from 'react';

const BigThumb = (props) => (
  <div className="thumbnail">
    <img src={props.thumb} className="main-image" onClick={props.clicked}/>
  </div>
)

export default BigThumb;