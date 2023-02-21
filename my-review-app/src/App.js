import MyFirstComponent from "./components/MyFirstComponent";
import MySecondComponent from "./components/MySecondComponent";

function App() {
  return (
    <div>
      <div>Hello World</div>
      <MyFirstComponent message="Carlos"/>
      <MyFirstComponent message="Muniz"/>
      <MyFirstComponent/>
      <MyFirstComponent/>
      <MySecondComponent/>
    </div>
  );
}

export default App;
