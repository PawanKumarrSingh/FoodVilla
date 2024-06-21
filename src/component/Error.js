import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div id="error-page">
      <h1>Something went wrong try again</h1>
      <h3>{err.status + " : " + err.statusText}</h3>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default Error;
