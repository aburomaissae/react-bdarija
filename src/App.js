import React from 'react';

// State vs Props
// Class Component
// Functional Component

function App() {
  return (
    <div>
      Hello World! <br/>
      <Person name={'larbi'} /> <br/>
      <PersonClass name={'azzeddine'} />
    </div>
  );
}

const Person = ({name}) => {
  React.useEffect( () => {
    // code goes here
  }, []);
  return <span>My name is: {name}</span> 
};

class PersonClass extends React.Component {


  componentDidMount() {
    // code goes here
  }

  render() {
    const {name} = this.props;
    return <span>My name is: {name}</span>;
  }
}

export default App;
