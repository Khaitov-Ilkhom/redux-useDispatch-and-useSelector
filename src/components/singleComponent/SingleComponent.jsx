import {useState} from 'react'
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.jsx";
import {FiPlus} from "react-icons/fi";
import {FaFacebookF, FaHeart, FaPinterestP, FaRegHeart, FaTwitter} from "react-icons/fa";
import visa from "../../images/visa.png"
import master_card from "../../images/master-card.png"
import pay_pal from "../../images/pay-pal.png"
import {SlBasketLoaded} from "react-icons/sl";
import {useDispatch} from "react-redux";


const SingleComponent = () => {
  const dispatch = useDispatch()
  const [stock, setStock] = useState(1)
  const [like, setLike] = useState(false)
  const {id} = useParams()
  const [data] = useFetch(`products/${id}`)

  // function starsFunc(numString) {
  //   if (numString > 5) {
  //     numString = 5;
  //   }
  //   const munStars = 5 - Math.floor(numString);
  //   const stars = Array(Math.floor(numString)).fill(
  //       <AiFillStar className="fill-amber-500"/>
  //   );
  //   const starsE = Array(munStars).fill(
  //       <AiOutlineStar className="fill-amber-500"/>
  //   );
  //   return (
  //       <div className="starsWrapper flex items-center gap-2 mt-1">
  //         <div className="flex items-center gap-1 w-24">
  //           {stars} {starsE}
  //         </div>
  //       </div>
  //   );
  // }

  const addToCart = (data) => {
    dispatch({type: "ADD_TO_CART", data: {...data, stock}})
  }

  return (
      <div className="mt-[100px] mb-[100px]">
        <div className="text-center">
          <h2 className="text-zinc-800 text-[46px] font-black font-['Lato'] leading-[59.80px]">{data.title}</h2>
        </div>
        <div className="w-full flex justify-center items-center gap-5 pt-[30px]">
          <div className="pr-[50px]">
            <img className="max-h-[500px]" src={data.image} alt={data.title}/>
          </div>
          <div className="max-w-[500px] w-full pl-[50px]">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className=" flex items-center gap-3">
                  <div className="text-red-500 text-2xl font-bold font-['Lato'] leading-[31.20px]">${data.price}</div>
                  <div
                      className="text-zinc-500 text-lg font-normal font-['Lato'] line-through leading-[27px]">${(data.price - (data.price * 50) / 100).toFixed(2)}</div>
                </div>
                <div className="px-2 py-px bg-red-500 rounded gap-2.5 inline-flex">
                  <div className="text-white text-lg font-bold font-['Lato'] leading-relaxed">-50%</div>
                </div>
              </div>
              <div>
                {/*{*/}
                {/*    starsFunc(data?.rating?.rate)*/}
                {/*}*/}
              </div>
            </div>

            <div className="w-[132px] h-[57px] mt-5 flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-gray-700 text-sm font-normal font-['Lato'] leading-[21px]">Color</div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute rounded-full border border-cyan-800"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-black rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute rounded-full border border-gray-300"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-blue-200 rounded-full"></div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute rounded-full border border-gray-300"></div>
                    <div className="w-4 h-4 left-[4px] top-[4px] absolute bg-yellow-300 rounded-full"></div>
                  </div>
                </div>
                <div className="text-zinc-400 text-sm font-normal font-['Lato'] leading-[21px]">Black</div>
              </div>
            </div>

            <div className="w-[525px] h-28 flex-col justify-start items-center gap-2 inline-flex mt-5">
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-[493px] text-zinc-800 text-lg font-bold font-['Lato'] leading-relaxed">Delivery</div>
                <div className="w-4 h-4 relative"><FiPlus/></div>
              </div>
              <div className="w-[525px] h-[0px] border border-gray-200"></div>
              <div className="justify-start items-center gap-4 inline-flex">
                <div className="w-[493px] text-zinc-800 text-lg font-bold font-['Lato'] leading-relaxed">Return</div>
                <div className="w-4 h-4 relative"><FiPlus/></div>
              </div>
              <div className="w-[525px]  border border-gray-200"></div>
            </div>

            <div className="w-[154px] h-[26px] justify-start items-center gap-4 inline-flex">
              <div className="text-zinc-800 text-lg font-bold font-['Lato'] leading-relaxed">Share:</div>
              <button className="w-5 h-5 text-gray-700 relative"><FaFacebookF/></button>
              <button className="w-5 h-5 text-gray-700 relative"><FaTwitter/></button>
              <button className="w-5 h-5 text-gray-700 relative"><FaPinterestP/></button>
            </div>

            <div className="py-3 border-b-2 ">
              <div className="w-full flex justify-between items-center">
                <div
                    className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between px-4 py-2 font-bold rounded-lg">
                  <button onClick={() => setStock(stock > 1 ? stock - 1 : stock)} className="text-sky-400">-</button>
                  <span>{stock}</span>
                  <button onClick={() => setStock(stock > 0 ? stock + 1 : stock)} className="text-sky-400">+</button>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => addToCart(data)}
                          className="bg-sky-100 text-sky-400 py-2 px-4 flex items-center rounded-lg gap-3">
                    <span><SlBasketLoaded/></span> Add To Cart
                  </button>
                  <button onClick={() => setLike(!like)}
                          className="bg-sky-100 text-sky-400 p-3 rounded-lg">{like ?
                      <span><FaRegHeart/></span> :
                      <span className="text-red-600"><FaHeart/></span>}</button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <div>
                <img className="max-w-[80px]" src={visa} alt=""/>
              </div>
              <div>
                <img className="max-w-[80px]" src={master_card} alt=""/>
              </div>
              <div>
                <img className="max-w-[80px]" src={pay_pal} alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[150px] mt-[50px]">
          <p className="text-gray-700 text-lg leading-7 font-normal font-['Lato']">{data.description} {data.description}</p>
        </div>
      </div>
  )
}
export default SingleComponent
