import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';

import testComponent from './testComponent.module.scss';
import { useStore, useDispatch, useSelector } from 'react-redux';



const TestComponent = () => {
  const store = useStore();
  const dispatch = useDispatch()
  const { counter } = useSelector(state => ({
    counter: state.someReducer.number
  }))

  return (
    <div className="mainContainer">
      <button onClick={() => dispatch({ type: "INCREASE" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-</button>
      {counter}
    </div>
  )
}
  ;

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
