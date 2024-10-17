import React from "react";
import "./assets/styles/app.scss";
import Comp from "./assets/components/Comp";
import Post from "./assets/components/miscellaneous/Post";

const App = () => {
  const title = "Desserts";

  return (
    <div>
      <Comp />
      <Post />
    </div>
  );
};

export default App;
