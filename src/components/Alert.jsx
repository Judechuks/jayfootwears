import React, { useEffect } from "react";

function Alert({ isError, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <p
      className={`absolute -bottom-6 ${
        isError ? "text-red-800" : "text-green-800"
      }`}>
      {msg}
    </p>
  );
}
export default Alert;
