import { useRef, useState } from "react"
import "./register.scss"

export default function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = ()=> {
        setEmail(emailRef.current.value);
    };
    const handleFinish = ()=> {
        setPassword(passwordRef.current.value);
    };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="" />
        <button className="loginButton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>dfgiudhajsdgo7wter</h1>
        <h2>sjdhgfukyegfbakjgqlyreglkjfb</h2>
        <p>
            kjdgfasjhdbksfugsjdfbksfgisalkcj
        </p>
        {!email ? (
                <div className="input">
                    <input type="email" placeholder="email address" ref={emailRef}/>
                    <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
            ) : (
            <form className="input">
                <input type= "password" placeholder="password" ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )}
      </div>
    </div>
  );
}
