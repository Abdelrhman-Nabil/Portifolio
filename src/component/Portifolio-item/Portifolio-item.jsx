import FristModal from "../modals/modal/modal";
import SecondModal from "../modals/second-modal/second-modal";
import Backdrop from "../backDrop/backDrop";
import { Fragment, useState } from "react";
import "./Portifolio-item.css";
const PortifolioItem = ({ data }) => {
  const[showModal,setShowModal]=useState(false);
  const [state,setState]=useState()
  const { link, title, img,details } = data;
  const fristmodal=<FristModal data={details} onClick={()=>{setShowModal(false)}} />
  const secondModal=<SecondModal data={details} onClick={()=>{setShowModal(false)}} />
  const visitHandler = () => {
    window.open(link, "_blank");
  };
  const detailsHandler=()=>{
    setShowModal(true)
    title==="Ecommerce"?setState(fristmodal):setState(secondModal)
    
  }
  return (
   <Fragment>
   {  showModal && state}
   {  showModal && <Backdrop data={{color:"black"}} onClick={()=>{setShowModal(false)}}  />}
    <div className="item">
      <div className="review-part">
        <div className="review-img">
          <div className="img-container">{img}</div>
        </div>
      </div>
      <div className="info-part">
        <div className="info">
          <div className="info-data">
            <div className="info-title">{title}</div>
            <div className="button-container">
              <button onClick={detailsHandler}>Details</button>
              <button onClick={visitHandler}>Visit site</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default PortifolioItem;

//
