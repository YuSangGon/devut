import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";

// import for fontAwsome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAnglesRight,
  faPenToSquare,
  faPlus,
  faReply,
  faShare,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Router from "./components/Router";

library.add(
  faPenToSquare,
  faTrash,
  faXmark,
  faPlus,
  faReply,
  faShare,
  faAnglesRight
);

function App() {
  return (
    <div className="App">
      <div className="content">
        <BrowserRouter>
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
