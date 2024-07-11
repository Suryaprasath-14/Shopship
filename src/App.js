import logo from './logo.svg';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { Provider } from 'react-redux';
import store from './store/Store';




function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/' element={<Home />}
            ></Route>
            <Route
              path='/cart' element={<Cart />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
