import './App.css';
import Profile from "./Components/Profile"
import Link from "./Components/Link" 
import slackImg from "./Components/slack.svg"
import githubImg from "./Components/github.svg"
import ZuriImg from "./Components/zuri.svg"
import IngressiveImg from "./Components/ingressive.svg"

function App() {
  return (
    <div className="App">
      <Profile/>

      <div className="links">
        <Link id="twitter-link" link="twitter.com/AdeagboJadesola" field="Twitter Link" />
        <Link id="btn__zuri" link="https://training.zuri.team/" field="Zuri Team"/>
        <Link id="books" link="https://books.zuri.team/" field="Zuri Books"/>
        <Link id="book__python" link="https://books.zuri.team/" field="Python Books"/>
        <Link id="pitch" link="https://background.zuri.team//python-for-beginners?ref_id=Rubies" field="Background check for coders"/>
        <Link id="book__design" link="https://books.zuri.team/design-rules"field="Design Books"/>
      </div>

      <div className='first-footer'>
        <img src={slackImg} alt="Slack Image" />
        <img src={githubImg} alt="" />
      </div>

      <div className="second-footer">
        <div className="sub-footer">
        <img src={ZuriImg} alt="" />
        <p>HNG Internship 9 Front end Task</p>
        <img src={IngressiveImg} alt="" />

      </div>
        </div>
    </div>
  );
}

export default App;
