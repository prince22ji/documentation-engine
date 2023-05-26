import { useState } from "react";
import "./App.css";
import ArtistList from "./components/Artists/ArtistList";
import axios from "axios";
import Requests from "./components/Requests/Requests";
import "bootstrap/dist/css/bootstrap.min.css";
import RenderMd from "./components/Markdown/RenderMd";
import Documentation from "./pages/Documentation/Documentation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const [artists, setArtists] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="/documents" element={<Documentation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
