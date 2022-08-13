import "./App.css";
import Categories from "./components/categories/Categries";
import Contacts from "./components/contact/Contacts";
import Navbar from "./components/navbar/Navbar";
import { URL_CONTACT } from "./constants/constants";
import useFetch from "./hooks/useFetch";

function App() {
  return (
    <div className="bg-gray-background">
      <Navbar />
      <Contacts />
      <Categories />
    </div>
  );
}

export default App;
