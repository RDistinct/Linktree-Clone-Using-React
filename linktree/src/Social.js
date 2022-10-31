import slack from './images/slack.png'
import github from './images/Icon.png'

const Social = () => {
    return ( 
        <div className="mediaContainer">
            <div className="socials">
                <a href="https://app.slack.com/client/T042F7V19Q8/C0484863C14/rimeto_profile/U048CAQUXGB">
                    <img src={slack} alt="slack logo" target="_blank" rel="noreferrer" />
                </a>
                <a href="http://github.com/RDistinct" target="_blank" rel="noreferrer">
                    <img src={github} alt="github logo" />
                </a>
            </div>
        </div>
     );
}
 
export default Social;