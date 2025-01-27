import React from 'react';
import StatusMessage from './Component/StatusMessage';

function App() {
  let message="success";
  if (message == "success") {
    message = "Operation Successful";
  }

  else if (message == "erro") {
    message="Something went wrong. Please try again."
  }
  else {
    message="Loading...."
  }

  return (
    <>
    <StatusMessage message={message} />
    </>
  )
}

export default App;
