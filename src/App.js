import './App.css';
import login from './login/login';

function App() {
  return (
    <div>
      {/* <login /> */}
      <body>
        {/* <img src="./logo.svg" alt="logo" /> */}
        <form >
          <div>
            <p class="head">Log in to Facebook</p>
          </div>
          <div>
            <input className='input' type="text" placeholder="Email address" name="email" />
          </div>
          <div>
            <input type="password" placeholder="Password" name="password" minlength="8" maxlength="12" />
          </div>
          <div>
            <button className="button">Log in</button>
          </div>
          <div>
            <a className="link" href='#'> Sign up for Facebook</a>
          </div>
        </form>
      </body>
    </div>
  );
}

export default App;
