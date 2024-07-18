import Container from "../container/Container.jsx";
import logo from "../../images/logo-removebg-preview.png"
import { BiSearchAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Navbar = () => {
    const state = useSelector(store => store)
    return (
        <Container>
              <nav className="w-full flex justify-between items-center text-gray-700 text-lg font-bold py-5 bg-[#ffffff29] fixed top-0 left-0 z-10 backdrop-blur-3xl">
                  <ul className=" w-full flex justify-center items-center gap-3">
                      <li className="px-5"><Link to="/"><img className="max-w-[200px]" src={logo} alt=""/></Link></li>
                      <li className="font-['Lato']">Men</li>
                      <li className="font-['Lato']">Women</li>
                      <li className="font-['Lato']">Boys</li>
                      <li className="font-['Lato']">Girls</li>
                  </ul>
                  <ul className="w-full flex justify-center items-center gap-4">
                      <li className="font-['Lato'] flex justify-center items-center gap-2 py-1 px-3 bg-blue-50 rounded-lg shadow-md"><input className="outline-none bg-transparent" type="text" placeholder="Search..."/> <BiSearchAlt/></li>
                      <li> <FaRegHeart/> </li>
                      <li><Link className="relative" to={'/basket'}><SlBasket/> <span className="w-5 h-5 flex font-semibold items-center justify-center text-white text-xs -top-3 -right-3  bg-rose-500 absolute rounded-full">{state.length !== 0 ? state.length : <></>}</span> </Link></li>
                  </ul>
              </nav>
        </Container>
    )
}
export default Navbar
