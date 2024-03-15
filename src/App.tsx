import { Routes , Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home/Home'
import News from "./pages/news/News";

function App() {
  return <>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/news"  element={<News/>}/>
    <Route path="/shop"  element={<News/>}/>
  </Routes>
  </>;
}

export default App;
