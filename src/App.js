import styles from './App.module.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { CharacterDetails } from "./pages/CharacterDetails";

function App() {
  return ( <Router>
      <header> 
        <Link to="/">
          <h1 className={styles.title}> Rick and Morty </h1>
        </Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/"> <LandingPage /> </Route>
          <Route path="/character/:characterId"> <CharacterDetails /> </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
