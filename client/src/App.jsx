import { BrowserRouter } from "react-router-dom";
import Layout from "./components/view/Layout.jsx";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
