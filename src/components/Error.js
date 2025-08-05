import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router";
const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1> Opps!</h1>
      <h2> Use Route Error</h2>
      <h3>
        {error.status} {error.statusText}
      </h3>
    </div>
  );
};

export default Error;
