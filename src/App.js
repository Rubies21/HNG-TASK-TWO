import './App.css';
import Profile from "./Components/Profile"
import Link from "./Components/Link" 
import slackImg from "./assets/slack.svg"
import githubImg from "./assets/github.svg"
import ZuriImg from "./assets/zuri.svg"
import IngressiveImg from "./assets/ingressive.svg"
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import cursor from "./assets/cursor.svg"
import Tooltip from "./assets/Tooltip.svg"

function App() {
  return (
    <div className="App">
      <div className="overall-top">
        <div className="section">

        <div className="share-container" tabindex="1">
        <RiShareForwardLine className="svg1" />
        <BsThreeDots className="svg2" />

        <span className="tooltiptext">
          {" "}
          <img src={Tooltip} alt="tooltip" width={90} />
        </span>

        <span className="cursor">
          <img src={cursor} alt="cursor" width={20} />
        </span>
      </div>

          <Profile/>

          <div className="links">
            <Link id="twitter-link" link="https://twitter.com/AdeagboJadesola" field="Twitter Link" />
            <Link id="btn__zuri" link="https://training.zuri.team/" field="Zuri Team"/>
            <Link id="books" link="https://books.zuri.team/" field="Zuri Books"/>
            <Link id="book__python" link="https://books.zuri.team/python-for-beginners?ref_id=Rubies" field="Python Books"/>
            <Link id="pitch" link="https://background.zuri.team" field="Background check for coders"/>
            <Link id="book__design" link="https://books.zuri.team/design-rules"field="Design Books"/>
            <Link id="contact" link="https://books.zuri.team/design-rules"field="Contact"/>
          </div>
        </div>
      </div> 
      <div className="footer-one-container">
        <div className='first-footer'>
          <div className="sub">
            <img src={slackImg} alt="Slack Image" />
            <a href="https://github.com/Rubies21"><img src={githubImg} alt="" /></a>
          </div>
        </div>
      </div>

      <div className="footer-two-container">
        <div className="second-footer">
        <div className="sub-footer">
        <img src={ZuriImg} alt="" />
        <p id='footer-text'>HNG Internship 9 Front end Task</p>
        <img src={IngressiveImg} alt="" />

        </div>
      </div>
      
      </div>
    </div>
  );
}

export default App;
