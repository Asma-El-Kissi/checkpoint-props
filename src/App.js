// import logo from './logo.svg';
import "./App.css";
import Profile from "./profile/Profile";
import ImageSource from "./profile/photo.jpg"

function App() {
  const styleobject = {textAlign:'center'}
  const fullName = "Asma El Kissi";
  const profession = "Project Manager";
  const bio =
  `She is Electrical Engineer. She has a Master and PhD in Electrical Engineering from National Engineering School of Monastir.
  Actually she is project manager in 3D Wave and Full-stack JavaScript Developer apprenant in GoMyCode`
  const handleName=()=>alert(fullName)
  return (
    <div style={styleobject}>
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
      <img src={ImageSource} width="120" height="140" />
    </Profile>
    </div>
  );
}

export default App;
