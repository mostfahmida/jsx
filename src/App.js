import logo from "./logo.svg";
import "./App.css";
import ProfilePhoto from "./profil/ProfilePhoto";
import Address from "./profil/Address";
import FullName from "./profil/ FullName";

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
