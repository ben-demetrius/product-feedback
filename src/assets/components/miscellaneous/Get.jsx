import React, { useEffect, useState } from "react";
import { get } from "../js/httpRequests.js";

const Get = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    get().then((data) => setData(data));
  }, []);
  console.log(data);

  const Cards = data.map(myFunction);

  function myFunction(data, i) {
    return (
      <div className="card" key={i}>
        <h1>{data.firstname}</h1>
      </div>
    );
  }
  return <div className="get">{Cards}</div>;
};

export default Get;
