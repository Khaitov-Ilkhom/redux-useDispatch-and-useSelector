import './App.css'
import Index from "./routes/Index.jsx";
import BackToTop from "./components/backToTop/BackToTop.jsx";
import {useLocation} from "react-router-dom";

function App() {
    const {pathname} = useLocation()

  return (
    <div className="app">
        <BackToTop URL={pathname}/>
        <Index/>
    </div>
  )
}

export default App

