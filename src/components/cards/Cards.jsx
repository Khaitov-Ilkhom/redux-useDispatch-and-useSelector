import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {Link} from "react-router-dom";
import {createPortal} from "react-dom";
import Modal from "../modal/Modal.jsx";
import {useRef} from "react";
import {ToastContainer} from 'react-toastify';


// eslint-disable-next-line react/prop-types
const Cards = ({product}) => {


  const modal = useRef()

  function starsFunc(numString) {
    if (numString > 5) {
      numString = 5;
    }
    const munStars = 5 - Math.floor(numString);
    const stars = Array(Math.floor(numString)).fill(
        <AiFillStar className="fill-amber-500"/>
    );
    const starsE = Array(munStars).fill(
        <AiOutlineStar className="fill-amber-500"/>
    );
    return (
        <div className="starsWrapper flex items-center gap-2 mt-1">
          <div className="flex items-center gap-1 w-24">
            {stars} {starsE}
          </div>
        </div>
    );
  }

  return (
      <div className="shadow-xl rounded-2xl hover:scale-105 duration-700 group">
        <Link to={`/single/${product.id}`} className="flex justify-center items-center">
          <img className="h-[200px] max-w-[200px] object-contain group-hover:scale-90 duration-700" src={product.image}
               alt={product.title}/>
        </Link>
        <div className="px-4 py-5">
          <h2 className="font-['Lato'] line-clamp-1 text-lg my-3">{product.title}</h2>
          <div className="flex justify-around items-center">
            <p className="text-zinc-800 text-xl font-bold font-['Lato'] leading-relaxed">${product.price}</p>
            {
              starsFunc(product.rating.rate)
            }
          </div>
          <div className='text-center my-3'>
            <button className="border bg-cyan-700 py-2 px-4 rounded-lg text-white font-['Lato']" onClick={() => modal.current.toggleModal()}>Open and Close</button>
            {createPortal(<Modal modal={modal}/>, document.getElementById("portal"))}
          </div>
        </div>
        <ToastContainer
            className="mt-[100px]"
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
        />
      </div>
  )
}
export default Cards
