import './App.css';
import {Router} from "./router/Router";
import {UserProvider} from "./providers/UserProvider"

const App = () => {
  return (
    <UserProvider>
      <Router/>
    </UserProvider>

  );
}

export default App;
