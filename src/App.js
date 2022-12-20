import Home from "./components/routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation";
import Authentication from "./components/authentication/authentication";
import Shop from "./components/routes/shop/shop";
import CheckOut from "./components/routes/checkout/CheckOut";
const Contact = () => {
  return <h1>Contact Us</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;
