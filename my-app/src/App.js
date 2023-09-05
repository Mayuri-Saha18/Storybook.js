
import './App.css';
import {MyButton} from './components/MyButton/MyButton';
import { Input } from './components/MyInput/Input';

function App() {

  function hello(){
    console.log("Hello")
  }
  return (
    <div className="App">
     
      <MyButton text={"Click me"} bgColor={"red"} size={"small"} primary={true} onclick={hello}></MyButton>
      <Input/>
    </div>
  );
}

export default App;
