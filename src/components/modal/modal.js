import React,{useState} from 'react'

// import { useNavigate } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import './styles.css'

const Modal = ({ children, customStyle }) => {
  const [show, setshow] = useState(true)
  const showHideClassName = show ? 'modal display-block' : 'modal display-none'
  // const navigate = useNavigate()
  const history = useHistory();


  const handleClose = () => {
    setshow(!show)
    history.goBack()
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main customStyle" style={{ ...customStyle }}>
        {children}
        <button type="button" onClick={handleClose} className="btn btn1">
          X
        </button>
      </section>
    </div>
  )
}

export default Modal
