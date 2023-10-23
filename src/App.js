import "./App.css";
import Button from "./components/Button"

export default function App() {
  function clickHandler(event){
    console.log('Hey that tickles!')
  }
	return (
  <div className="App">
    <Button title='Click me' onClick = {clickHandler}/>
  </div>;
  )
}
