import { Routes , Route } from "react-router-dom";
import "./App.css";
import Home from './pages/home/Home'
import News from "./pages/news/News";
import Shop from "./pages/shop/Shop";

function App() {
  return <>
  <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path="/news"  element={<News/>}/>
    <Route path="/shop"  element={<Shop/>}/>
  </Routes>
  </>;
}

export default App;
