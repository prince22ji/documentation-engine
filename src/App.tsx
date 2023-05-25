import { useState } from 'react'
import './App.css'
import ArtistList from './components/Artists/ArtistList'
import axios from 'axios'
import Requests from './components/Requests/Requests'
import 'bootstrap/dist/css/bootstrap.min.css';
import RenderMd from './components/Markdown/RenderMd'


function App() {
  const [count, setCount] = useState(0)
  const [artists,setArtists] = useState([])

  return (
   <><RenderMd /></>
  )
}

export default App
