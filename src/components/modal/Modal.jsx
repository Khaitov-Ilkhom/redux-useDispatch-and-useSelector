import "./Modal.css";
import {useImperativeHandle, forwardRef, useState} from "react";
import 'react-toastify/dist/ReactToastify.css';
import {Bounce, toast} from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components,react/prop-types
const Modal = ({modal}) => {
  const [open, setOpen] = useState(false);
  const notify = () => toast.success('The product has been removed!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
  const notif = () => toast.error('The product was not deleted!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

  const deleted = (t) => {
    if (t) {
      notify()
      setOpen(false)
    } else {
      notif()
      setOpen(false)
    }
  }

  useImperativeHandle(modal, () => {
    return {
      toggleModal: () => {
        setOpen(!open)
      }
    }
  })

  return (
      <div onClick={() => setOpen(false)} ref={modal} className={`overlay ${open ? "active" : ""}`}>
        <div onClick={(e) => e.stopPropagation()}
             className="modal flex justify-center items-center flex-col rounded-2xl">
          <div className="text-gray-700 text-2xl leading-7 font-normal font-['Lato']">Are you sure you want to delete
            this product?
          </div>
          <div className="mt-[100px] px-[100px] flex justify-around items-center w-full">
            <div>
              <button className="bg-green-600 px-6 py-2 text-lg rounded-lg font-bold font-['Lato'] text-white"
                      onClick={ () => deleted(true)}>Yes
              </button>
            </div>
            <div>
              <button className="bg-red-600 px-6 py-2 text-lg rounded-lg font-bold font-['Lato'] text-white"
                      onClick={() => deleted(false)}>No
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default forwardRef(Modal)