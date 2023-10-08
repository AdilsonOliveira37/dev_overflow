import React from "react";

interface Props {
  name: string;
}

const SignIn: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default SignIn;
