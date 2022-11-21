import Home from "./components/routes/home/home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/sign-in/SignIn";
const Shop = () => {
  return <h1>Shop Now</h1>;
};
const Contact = () => {
  return <h1>Contact Us</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
