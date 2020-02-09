import React from 'react';

import NotiFrom from './pages/form';
import NotiList from './pages/list';

function App() {

  const [currentInterface, setCurrentInterface] = React.useState('list');

  const content = currentInterface === 'list' 
                  ? <NotiList goTo={setCurrentInterface} />
                  : <NotiFrom goTo={setCurrentInterface} />;

  return (
    <div className="container">
      <h2>Notifcations</h2>
      { content }
    </div>
  );
}

export default App;
