import "./App.css";

import DateSelection from "./components/DateSelection/DateSelection";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import MainContent from "./components/MainContent/MainContent";
function App() {
  return (
    <>
      <Navbar />
      <DateSelection />
      <Sidebar />
      <MainContent />
    </>
  );
}

export default App;
