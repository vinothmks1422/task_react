// import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
          <button class="button">Log in</button>
        </div>
        <div>
          <a class="link" href='#'> Sign up for Facebook</a>
        </div>
      </form>
    </body>
  );
}

export default App;
