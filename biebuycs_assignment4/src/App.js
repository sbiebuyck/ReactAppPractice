import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProducePage from'./pages/ProducePage.js';
import StoresPage from './pages/StoresPage.js';
import NavBar from './components/NavBar.js';


function App() {

  return (

    <div className="App">
      <Router>
      <header className="header">
        <h1>The Produce Drawer</h1>
        <p> One supermarkets trash is another sketchy-website's treasure! </p>
      </header>

        <main>
        <NavBar />
          <Switch>
            <Route path="/(|index.html)" exact >
              <HomePage />
            </Route>
            <Route path="/order" exact >
              <ProducePage />
            </Route>
            <Route path="/stores" exact >
               <StoresPage />
            </Route>
          </Switch>
        </main>
      </Router>

        <footer>
          <p> © 2022 Sara Biebuyck </p>
        </footer>
    </div>

  );
}

export default App;
