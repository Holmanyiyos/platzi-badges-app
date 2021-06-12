import React from 'react';

import './styles/PageError.css';

function PageError(props) {
  // eslint-disable-next-line
  return <div className="PageError"><span role="img">❌</span>{props.error.message} <span role="img">😱</span> </div>;
}

export default PageError;