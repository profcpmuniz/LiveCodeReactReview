import MyFirstComponent from "./components/MyFirstComponent";
import MySecondComponent from "./components/MySecondComponent";
import { FaBeer, FaDigitalOcean } from 'react-icons/fa';
import { MdCommute } from "react-icons/md";
function App() {
  return (
    <div>
      <div>  <i className="fa-solid fa-clock"></i> Hello World <FaBeer  size={70}  /> <FaDigitalOcean /></div>
      <MdCommute/>
      <MyFirstComponent message="Carlos"/>
      <MyFirstComponent message="Muniz"/>
      <MyFirstComponent/>
      <MyFirstComponent/>
      <MySecondComponent/>
    </div>
  );
}

export default App;
