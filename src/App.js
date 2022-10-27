import './App.css';
import Profile from "./Components/Profile"
import Link from "./Components/Link" 


function App() {
  return (
    <div className="App">
      <Profile/>

      <div className="links">
        <Link field="Twitter Link"/>
        <Link field="Zuri Team"/>
        <Link field="Zuri Books"/>
        <Link field="Python Books"/>
        <Link field="Background check for coders"/>
        <Link field="Design Books"/>
      </div>
    </div>
  );
}

export default App;
