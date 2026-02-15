
import "./index.css";
import "./App.css";
import Dashboard from './pages/Dashboard'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import { Provider } from "react-redux";
import store from "./store/store";
import ProductDetails from "./components/ProductDetails";
import LoginPage from "./components/LoginPage";


function App() {

  return (
     <div>
      <Provider store={store}>
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/products/:id" element={<ProductDetails/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
      
     </div>
  )
}

export default App
