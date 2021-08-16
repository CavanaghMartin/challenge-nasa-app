import { Route } from "react-router-dom";
import Home from './pages/Home';
import Favorite from './pages/Favorite';
function App() {
  return (
    <div className="App">
      <Route exact path='/' render={() => <Home />} />
      <Route exact path='/favorite' render={() => <Favorite />} />
    </div>
  );
}

export default App;
