import { useState } from 'react';

function GreetingButton() {
  const [greet, setGreet] = useState("");

  const showGreeting = () => {
    setGreet("Hello, this is the feature branch!");
  };

  return (
    <div>
      <button onClick={showGreeting}>Click Me</button>
      <p>{greet}</p>
    </div>
  );
}

export default GreetingButton;
