import spinner from 'react-bootstrap';

import React from 'react'

const Loader = () => {
  return (
    <spinner 
        animation="border"
        role="status"
        style = {{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block"
        }}
    ></spinner>
  );
};

export default Loader