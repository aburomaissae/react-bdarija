import React from 'react';
import PropTypes from 'prop-types';

// State vs Props
// Class Component
// Functional Component

// Shared States > Context

function App() {
  return (
    <div>
      <Family surname={'ABC'} /> <br/>
    </div>
  );
}

const GrandChild = ({name, surname, hasChildren}) => {
  return (
    <>
      <span>I am: {name}</span><br/>
      {
        hasChildren && <GrandGrandChild surname={surname} name={'Fahed'} />
      }
    </>
  )
};

const GrandGrandChild = ({name, surname}) => {
  return (
    <>
      <span>I am: {name} {surname} </span><br/>
    </>
  ) 
};

const Person = ({name, surname, hasChildren}) => {
  return (
    <>
      <span>I am: {name} {surname} </span><br/>
      {
        hasChildren && <GrandChild  surname={surname} name={'Mustapha'} hasChildren />
      }
    </>
  ) 
};

Person.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  hasChildren: PropTypes.bool,
};

Person.defaultProps = {
  hasChildren: false,
};

const Family = ({surname}) => {
  return (
    <>
      <Person surname={surname} name={'Ahmed'} /> <br/>
      <Person surname={surname} name={'Karim'} hasChildren />
    </>
  );
};

export default App;
