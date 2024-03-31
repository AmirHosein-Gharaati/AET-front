import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";

import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/dashboard/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
