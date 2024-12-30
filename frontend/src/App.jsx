import Home from "./components/Home/Home"
import Addinvestor from "./components/AddInvestor/Addinvestor"
import InvestorProfile from "./components/InvestorProfile/InvestorProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addinvestor" element={<Addinvestor />} />
      <Route path="/investor/:id" element={<InvestorProfile />} />
</Routes>
</BrowserRouter>
      </div>

    </>
  )
}

export default App
