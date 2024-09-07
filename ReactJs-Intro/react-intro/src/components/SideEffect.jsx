import { useEffect, useState } from "react";

const SideEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  //   console.log("data", data);
  return (
    <div>
      {data.map((item) => (
        <p key={item.id}>{item.username}</p>
      ))}
    </div>
  );
};

export default SideEffect;
