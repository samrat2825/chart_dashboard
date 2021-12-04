import { React, useState } from "react";
import { store } from "./redux/Store/store";
import LoadingPage from "./components/LoadingPage";
import Home from "./pages/Home";

function App() {
  const currentState = store.getState();
  const [refresh, refresher] = useState(0);

  store.subscribe(() => {
    refresher(refresh + 1);
  });

  if (currentState.loading) {
    return <LoadingPage />;
  } else {
    return <Home />;
  }
}

export default App;
