import Home from "./components/Home/Home"
import Addinvestor from "./components/AddInvestor/Addinvestor"
import InvestorProfile from "./components/InvestorProfile/InvestorProfile";
import SheetDataHome from "./components/ReadingSheetData/SheetDataHome/SheetDataHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SheetProfile from "./components/ReadingSheetData/SheetProfile/SheetProfile";

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addinvestor" element={<Addinvestor />} />
      <Route path="/investor/:id" element={<InvestorProfile />} />
      <Route path="/investorfromsheet/:id" element={<SheetProfile />} />
      <Route path="/investorsfromsheets" element={<SheetDataHome />} />
      
</Routes>
</BrowserRouter>
      </div>

    </>
  )
}

export default App
