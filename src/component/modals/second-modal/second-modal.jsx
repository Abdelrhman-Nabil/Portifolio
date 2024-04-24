import "./second-modal.css";
const SecondModal = ({ data, onClick }) => {
  const fristData = data[0];
  const secondData = data[1];
  const thiredData = data[2];
  console.log(data)
  return (
    <div className="second-modal">
      <div className="second-modal-header">
        <h2>Project Details</h2>
        <button className="second-closebutton" onClick={onClick}>
          &#10005;
        </button>
      </div>
      <div className="second-modal-content">
        <div className="second-content-frist-part">{fristData}</div>

        <div className="second-content-thired-part">
          <ul>
            <h4>React</h4>
            {secondData.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
         {thiredData&&<div className="second-content-forth-part">
         <ul>
           <h4>Node+Express+MongoDB</h4>
           {thiredData.map((el) => {
             return <li>{el}</li>;
           })}
         </ul>
       </div>}
      </div>
    </div>
  );
};

export default SecondModal;
