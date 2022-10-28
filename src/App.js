import './App.css';
import Profile from "./Components/Profile"
import Link from "./Components/Link" 
import slackImg from "./Components/slack.svg"
import githubImg from "./Components/github.svg"
import ZuriImg from "./Components/zuri.svg"
import IngressiveImg from "./Components/ingressive.svg"
import share from "./Components/share.svg"
import minimizedShare from "./Components/minimizedShare.svg"
import FocusShare from "./Components/FocusShare.svg"
import HoverShare from "./Components/HoverShare.svg"



function App() {
  return (
    <div className="App">
      <div className="overall-top">
        <div className="section">

          <div className="shareImg">
            <div className="share-container">
            <img src={share} alt="Share Avatar Button" className='img1'/>
            <img src={minimizedShare} alt="" className='imgMin' />
            <img src={FocusShare} alt="" className='imgFocus'/></div>
            <img src={HoverShare} alt="" className='imgHover'/>
          </div>

          <Profile/>

          <div className="links">
            <Link id="twitter-link" link="https://twitter.com/AdeagboJadesola" field="Twitter Link" />
            <Link id="btn__zuri" link="https://training.zuri.team/" field="Zuri Team"/>
            <Link id="books" link="https://books.zuri.team/" field="Zuri Books"/>
            <Link id="book__python" link="https://books.zuri.team/python-for-beginners?ref_id=Rubies" field="Python Books"/>
            <Link id="pitch" link="https://background.zuri.team" field="Background check for coders"/>
            <Link id="book__design" link="https://books.zuri.team/design-rules"field="Design Books"/>
          </div>
        </div>
      </div>
      <div className="footer-one-container">
        <div className='first-footer'>
          <div className="sub">
            <img src={slackImg} alt="Slack Image" />
            <img src={githubImg} alt="" />
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
