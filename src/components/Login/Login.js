import { useRef, useState } from "react";
import checkValidationData from "../../constants/Validate";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const [message, setMessage] = useState();

  const handleLogin = () => {
    let message1 = checkValidationData(
      email.current.value,
      password.current.value
    );
    setMessage(message1);
  };
  return (
    <div>
      <h1>Login Using Ref</h1>

      <div>
        <input type="text" ref={email} placeholder="enter your Email" />
        <input type="text" ref={password} placeholder="enter your password" />
        <p>{message}</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};
