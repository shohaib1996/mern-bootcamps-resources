import { useState } from "react";
import ChildrenComponent from "../components/ChildrenComponent";

const Home = () => {
  const [value, setValue] = useState(50);
  return (
    <div>
      <h1>
        This is parent component
        <ChildrenComponent title={"I am from the"} />
        <ChildrenComponent
          title={`I'm ${value} years old.`}
        ></ChildrenComponent>
      </h1>
    </div>
  );
};

export default Home;
