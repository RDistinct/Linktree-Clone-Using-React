import avataaars from './images/avataaars.png'
import desktopShare from './images/desktop-share.png'
import mobileShare from './images/mobile-share.png'

const profile = () => {
    return (
      <div className="profileContainer">
        <div className="profileElements">
          <img id="profile__img" src={avataaars} alt="" srcset="" />
          <h3>RuBen</h3>
          <p id="slack" style={{display:'none'}}>reubenkiarie8m</p>
        </div>
        <div className="shareBtn">
            {/**share btn */}
            <img src={desktopShare} alt="share button for desktop" />
        </div>
        <div className="mobileBtn">
            {/**mobile btn */}
            <img src={mobileShare} alt="share button for desktop" />
        </div>
      </div>
    );
}
 
export default profile;