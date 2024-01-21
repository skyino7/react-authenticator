import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="appName">
            User Authentication
          </span>
        </div>
      </nav>
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
