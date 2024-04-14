import { useState } from "react";
import checkValidationData from "../../constants/Validate";

export const Loginb = () => {
  const [message, setMessage] = useState();
  const handleEmail = (e) => {
    let emailCheck = e.target.value;
    const checkMessage = checkValidationData(emailCheck);
    setMessage(checkMessage);
  };
  const handlePassword = (e) => {
    let CheckPassword = e.target.value;
    const CheckPMessage = checkValidationData(CheckPassword);
    setMessage(CheckPMessage);
  };

  return (
    <div>
      {/* <h1>Login Using target</h1>

      <input type="text" placeholder="Enter your mail" onChange={handleEmail} />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={handlePassword}
      />
      <p>{message}</p>
      <button>Login</button> */}
    </div>
  );
};
