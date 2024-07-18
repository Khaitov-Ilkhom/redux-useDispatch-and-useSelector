import {CiCircleRemove} from "react-icons/ci";
import {useDispatch, useSelector} from "react-redux";

const BasketComponent = () => {
  const state = useSelector(store => store)
  const dispatch = useDispatch()
  const removeCard = (id) => {
    dispatch({type: "REMOVE_CARD", id})
  }

  const incrementStock = (id) => {
    dispatch({type: "INCREMENT_STOCK", id})
  }
  const decrementStock = (id) => {
    dispatch({type: "DECREMENT_STOCK", id})
  }

  return (
      <table className="px-[60px] w-full my-[100px]">
        <tbody className="w-full">
        <tr className="w-full justify-around items-center border-b-2">
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRODUCT</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">PRICE</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">QTY</th>
          <th className="max-w-[300px] py-3 text-zinc-800 text-xl font-medium">UNIT PRICE</th>
        </tr>
        {
          state?.map(product =>
              <tr key={product.id}
                  className="w-full border-b-2 justify-around items-center min-h-[200px] text-neutral-800 text-lg font-normal">
                <td className=" max-w-[400px] pl-[30px] py-5">
                  <div className="flex items-center gap-5">
                    <button className="font-2xl text-red-600"
                            onClick={() => removeCard(product.id)}><CiCircleRemove/></button>
                    <img className="w-[200px] h-[150px] object-contain" src={product.image}
                         alt={product.title}/>
                    <span>{product.title}</span>
                  </div>
                </td>
                <td className="max-w-[200px] text-center">
                  ${product.price}
                </td>
                <td className="max-w-[300px] w-full px-[10px] flex justify-center items-center">
                  <div
                      className="bg-[#f6f7f8] max-w-[140px] w-full flex justify-between items-center px-4 py-2 mt-[70px] font-bold rounded-lg">
                    <button onClick={() => decrementStock(product.id)} className="text-sky-400">-
                    </button>
                    <span>{product.stock}</span>
                    <button onClick={() => incrementStock(product.id)} className="text-sky-400">+
                    </button>
                  </div>
                </td>
                <td className="max-w-[200px] text-center ">${(product.price * product.stock).toFixed(2)}</td>
              </tr>
          )
        }
        </tbody>
      </table>
  )
}
export default BasketComponent
