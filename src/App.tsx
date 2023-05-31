import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Documentation from "./pages/Documentation/Documentation";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import store from "./services/Redux/store";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [artists, setArtists] = useState([]);
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"> 
          <Route path="/documents" element={<Documentation />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
