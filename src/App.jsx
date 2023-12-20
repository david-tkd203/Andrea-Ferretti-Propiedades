import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <section>
          <Switch>
            <Route exact path="/" component={ItemListContainer} />
            <Route path="/category/:id" component={ItemListContainer} />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </section>
      </>
    </Router>
  );
}

export default App;

