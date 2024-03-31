import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store, { persistor } from "./store/store";

import SignUp from "./pages/signup/SignUp";
import NotFound from "./pages/NotFound";
import Home from "./pages/dashboard/Home";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
