import { Route,Routes } from "react-router-dom"
import Header from "./routes/header/header";
import Home from './routes/home/home'
import Contact from "./routes/contact/contact";
import './app.css'
function App() {
  return(
    <Routes>
      <Route path="/" element={<Header/>}>
      <Route index element={<Home/>}/>
      <Route path="Contact" element={<Contact/>}/>
      </Route>
    </Routes>
)
}

export default App;
