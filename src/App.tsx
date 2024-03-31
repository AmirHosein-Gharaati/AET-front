import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/dashboard/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
