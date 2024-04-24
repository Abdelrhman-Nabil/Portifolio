import "./modal.css";
const FristModal = ({ data, onClick }) => {
  const fristData = data[0];
  const secondData = data[1];
  const thiredData = data[2];
  const forthData = data[3];
  console.log(data)
  return (
    <div className="frist-modal">
      <div className="frist-modal-header">
        <h2>Project Details</h2>
        <button className="frist-closebutton" onClick={onClick}>
          &#10005;
        </button>
      </div>
      <div className="frist-modal-content">
        <div className="frist-content-frist-part">{fristData}</div>
        <div className="frist-content-second-part">
          <ul className="frist-content-ul">
            <h4>{secondData[0]}</h4>
            <h5>-{secondData[1]}</h5>
            <li>
              {secondData[2][0]}
              <ol>
                <li>{secondData[2][1]}</li>
                <li>{secondData[2][2]}</li>
                <li>{secondData[2][3]}</li>
              </ol>
            </li>
            <li>
              {secondData[3][0]}
              <ol>
                <li>{secondData[3][1]}</li>
                <li>{secondData[3][2]}</li>
                <li>{secondData[3][3]}</li>
                <li>{secondData[3][4]}</li>
                <li>{secondData[3][5]}</li>
              </ol>
            </li>
          </ul>
        </div>
        <div className="frist-content-thired-part">
          <ul>
            <h4>React</h4>
            {thiredData.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
        <div className="frist-content-forth-part">
          <ul>
            <h4>Node+Express+MongoDB</h4>
            {forthData.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FristModal;
