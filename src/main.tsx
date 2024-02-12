import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "react-redux";
import strore from "./store/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={strore}>
    <App />
  </Provider>
);
