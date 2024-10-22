import React, { useState } from "react";
import Person from "../../js/Person";

const Post = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempObj = new Person({ firstName: name, age: age });
    console.log(tempObj);
  };

  return (
    <form className="Post" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        id="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button type="submit">POST</button>
    </form>
  );
};

export default Post;
