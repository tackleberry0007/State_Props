import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import Props from './Props';
import State from './State';

function App() {
  return (
    <>
      <Props name="Kelvin Kumar" />
      <Props name="Himmat singh" />
      <State />
    </>
  );
}

export default App;
