import './App.css';
import Profile from "./Components/Profile"
import Link from "./Components/Link" 


function App() {
  return (
    <div className="App">
      <Profile/>

      <div className="links">
        <Link id="twitter-link" link="twitter.com/AdeagboJadesola" field="Twitter Link" />
        <Link id="btn__zuri" link="https://training.zuri.team/" field="Zuri Team"/>
        <Link id="books" link="https://books.zuri.team/" field="Zuri Books"/>
        <Link id="book__python" link="https://books.zuri.team/" field="Python Books"/>
        <Link id="pitch" link="https://background.zuri.team/" field="Background check for coders"/>
        <Link id="book__design" link="https://books.zuri.team/design-rules"field="Design Books"/>
      </div>
    </div>
  );
}

export default App;
