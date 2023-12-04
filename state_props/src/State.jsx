
import React, { useState } from 'react';

const State = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1>State Example</h1>
      <button onClick={toggleMessage}>Toggle Message</button>
      {showMessage && <p>This message is toggled using state!</p>}
    </div>
  );
};

export default State;
