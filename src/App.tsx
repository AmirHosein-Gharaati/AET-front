import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./App.css";

import ThemeRoutes from "./routes";
import store, { persistor } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ThemeRoutes />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
