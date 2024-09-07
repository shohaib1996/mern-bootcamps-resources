import { useState } from "react";

const MyFirstComponent = () => {
  //count is kind of variable and setCount is a setter function
  const [count, setCount] = useState(50);

  console.log(count);

  const changeStateValue = () => {
    setCount(count + 40);
  };

  return (
    <div>
      <h1>This is my first component</h1>
      <button onClick={changeStateValue}>Change State</button>
    </div>
  );
};

export default MyFirstComponent;
