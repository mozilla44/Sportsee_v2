import "../styles/css/keydata.css";
const KeyData = ({ x, y, img }) => {
  return (
    <>
      <div className="key_data_card">
        <img src={img} alt=""></img>
        <div className="keydata_text">
          <div>{x}</div>
          <div>{y}</div>
        </div>
      </div>
    </>
  );
};

export default KeyData;
