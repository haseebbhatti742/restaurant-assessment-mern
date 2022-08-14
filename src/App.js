import "./App.css";
import Categories from "./components/categories/Categries";
import Contacts from "./components/contact/Contacts";
import FormSection from "./components/formSection";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import { useAppContext } from "./context/AppContextContainer";

function App() {
  const { cartItems } = useAppContext();
  return (
    <div>
      <div className="bg-gray-background">
        <Navbar />
        <Landing />
        <Contacts />
      </div>
      <div className="px-0 sm:10 md:px-20 mt-24">
        <FormSection />
        <Categories />
      </div>
    </div>
  );
}

export default App;
