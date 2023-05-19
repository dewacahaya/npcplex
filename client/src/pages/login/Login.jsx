import "./login.scss"

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
        <img className="logo" src="https://www.logo.wine/a/logo/Netflix/Netflix-Logo.wine.svg" alt="" />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <button className="loginButton">Sign In</button>
          <span>New To Stream? <b>Sign Up Now</b></span>
        </form> 
      </div>
    </div>
  );
}
