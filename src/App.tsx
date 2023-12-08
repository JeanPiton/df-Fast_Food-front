import { setupIonicReact } from "@ionic/react";
import '@ionic/react/css/core.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import KitchenPage from "./pages/KitchenPage";
import OrdersPage from "./pages/OrdersPage";

setupIonicReact();

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/orders" />}/>
        <Route path="/orders" element={<OrdersPage/>}/>
        <Route path="/kitchen" element={<KitchenPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
