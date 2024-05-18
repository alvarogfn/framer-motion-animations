import React from "react";

const regex: {
  [key: string]: RegExp;
} = {
  email: /\S+@\S+\.\S+/,
  text: /[\s\S]+/,
};

function useInput(
  validation: "email" | "text" = "text",
  message: string = "Invalid.",
  required: boolean = true
) {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<string>(message);
  const [isValid, setIsValid] = React.useState<boolean>(true);

  function updateValidity() {
    if (required && !value.length) {
      setIsValid(false);
      setError("Required.");
      return false;
    }

    if (!regex[validation].test(value)) {
      setIsValid(false);
      setError(message);
      return false;
    }

    setIsValid(true);
    return isValid;
  }

  function onChange(value: string) {
    setIsValid(true);
    setValue(value);
  }

  return {
    value,
    error,
    isValid,
    updateValidity,
    onChange,
  };
}

export { useInput };
