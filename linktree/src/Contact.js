import zuriLogo from './images/Zuri.Internship_Logo.png'
import ingressiveLogo from './images/ingressive.png'

const Footer = () => {
    return ( 
        <div className="footerContainer">
            <div className="footerItems">
                <div className="zuriLogo">
                    <img src={zuriLogo} alt="" />
                </div>
                <div className="zuriText">
                    <h3>HNG    Internship 9 Frontend Task</h3>
                </div>
                <div className="ingressiveLogo">
                    <img src={ingressiveLogo} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Footer;