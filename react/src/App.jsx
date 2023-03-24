import Protected from "./components/Protected";
import Public from "./components/Public";

import useAuth from "./hooks/useAuth";

function App() {
  const [isLogin, token] = useAuth();
  return isLogin ? <Protected token={token} /> : <Public />;
}

export default App;
