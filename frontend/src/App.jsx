import Home from "./components/Home/Home"
import Addinvestor from "./components/AddInvestor/Addinvestor"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <>
      <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addinvestor" element={<Addinvestor />} />
</Routes>
</BrowserRouter>
      </div>

    </>
  )
}

export default App
