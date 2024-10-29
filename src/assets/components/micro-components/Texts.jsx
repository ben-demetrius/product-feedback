import React from "react";

const Loading = ({ loadingText = "loading..." }) => {
  return (
    <div className="pfa-categories">
      <p>{loadingText}</p>
    </div>
  );
};

const Error = ({ errorText = "Failed To Load" }) => {
  return (
    <div className="pfa-categories">
      <p>{errorText}</p>
    </div>
  );
};

export { Loading, Error };
