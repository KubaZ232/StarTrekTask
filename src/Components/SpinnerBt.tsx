import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function SpinnerBt() {
  return (
    <Spinner animation="border" role="status" className='SpinnerBt'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerBt;