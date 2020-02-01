import React from 'react';

import NotiFrom from './pages/form';
import NotiList from './pages/list';

function App() {

  const [currentInterface, setCurrentInterface] = React.useState('form');

  const content = currentInterface === 'list' ? <NotiList /> : <NotiFrom />;

  return (
    <div className="container">
      <h2>Notifcations</h2>
      { content }
    </div>
  );
}

export default App;
