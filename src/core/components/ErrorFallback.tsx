import { FallbackProps, useErrorBoundary } from "react-error-boundary";

import "./ErrorFallback.css";

const ErrorFallback = ({ error }: FallbackProps) => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div className="error-container" role="alert">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button className="secondary-btn" onClick={resetBoundary}>
        Try again
      </button>
    </div>
  );
};

export default ErrorFallback;
