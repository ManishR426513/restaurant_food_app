import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import AddressForm from "./components/AddressForm";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              {" "}
              <Cards />{" "}
            </Layout>
          }
        />
        <Route
          path="/cart/:id"
          element={
            <Layout>
              {" "}
              <CardsDetails />{" "}
            </Layout>
          }
        />
        <Route 
         path="/checkout"
         element={
          
             
             <Checkout />
          
         }
      />

      </Routes>
    </>
  );
}

export default App;
