import React from 'react';
import PropTypes from 'prop-types';

// State vs Props
// Class Component
// Functional Component

// Shared States > Context

const FamilyContext = React.createContext();

function App() {
  return (
    <FamilyContext.Provider value={{surname:'IJK'}}>
      <div>
        <Person name={'Ahmed'} /> <br/>
        <Person name={'Karim'} hasChildren />
      </div>  
    </FamilyContext.Provider>
  );
}

const GrandChild = ({name, hasChildren}) => {
  return (
    <>
      <span>I am: {name}</span><br/>
      {
        hasChildren && <GrandGrandChild name={'Fahed'} />
      }
    </>
  )
};

const GrandGrandChild = ({name}) => {
  return (
    <>
      <FamilyContext.Consumer>
        {
          ({surname}) => (
            <span>I am: {name} {surname}</span>
          )
        }
      </FamilyContext.Consumer>
    </>
  ) 
};

const Person = ({name, hasChildren}) => {
  return (
    <>
      <span>I am: {name} </span><br/>
      {
        hasChildren && <GrandChild name={'Mustapha'} hasChildren />
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

export default App;
