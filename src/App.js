import './App.css';
import { Router } from '@reach/router';
import AllProducts from './components/AllProducts';
import Create from './components/Create';
import Details from './components/Details';
import Edit from './components/Edit';
import Delete from './components/Delete';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Router>
        <AllProducts path="/products"/>
        <Create path="/products/new" />
        <Details path="/products/:id"/>
        <Edit path="/products/:id/edit" />
      </Router>
      
    </div>
  );
}

export default App;
