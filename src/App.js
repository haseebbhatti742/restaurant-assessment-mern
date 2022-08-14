import "./App.css";
import Categories from "./components/categories/Categries";
import Contacts from "./components/contact/Contacts";
import FormSection from "./components/formSection";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <div className="bg-gray-background">
        <Navbar />
        <Landing />
        <Contacts />
      </div>
      <div className="px-20 md:px-20  mt-24">
        <FormSection />
        <Categories />
      </div>
      <div
        id="footer"
        style={{ fontFamily: "Manrope" }}
        className="w-auto flex justify-center p-8 mt-10 font-semibold text-gray-600 bg-gray-background"
      >
        Copyright &copy; 2022 Haseeb Ahmed. All Rights Reserved
      </div>
    </div>
  );
}

export default App;
