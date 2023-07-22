import "../styles/css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_nav">
        <img src="/assets/zen.svg" alt="zen" className="sidebar_icon"></img>
        <img src="/assets/swim.svg" alt="swim" className="sidebar_icon"></img>
        <img src="/assets/bike.svg" alt="bike" className="sidebar_icon"></img>
        <img src="/assets/muscle.svg" alt="muscle" className="sidebar_icon"></img>
      </div>
     
     <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
    
  );
}

export default Sidebar;
