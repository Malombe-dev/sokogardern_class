
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import AddProduct from './components/AddProduct';
import Getproducts from './components/GetProducts';
import MpesaPayment from './components/MpesaPayment';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header bg-success">
          <h1 className="display-3 text-center p-2 text-light fw-bold">
            SokoGarden-Buy &amp; Sell Online
          </h1>
        </header>

        <NavBar />

        {/* create our routes */}
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/mpesa" element={<MpesaPayment />} />
          {/* This is the default component */}
          <Route path="/" element={<Getproducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
