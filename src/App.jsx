import LoginButton from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import "./styles/style.scss";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <header>{isAuthenticated ? <Logout /> : <LoginButton />}</header>

      <div className="profile-container">
        {isAuthenticated ? (
          <Profile />
        ) : (
          <div>
            <h2>Please login to view your information</h2>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
