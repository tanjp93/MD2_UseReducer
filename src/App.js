import './App.css';
import { useReducer } from 'react';


//useState
//1. Init state :0
//2.Action: Up(State+1) /Action: Down(State-1)  

//useReducer
//1. Init state :0
//2.Action: Up(State+1) /Action: Down(State-1)  
//3.Reducer
//4. Dispash

//Init State  


//Action


//Reducer


const initialState = 0
const handleDown = "down"
const handleUp = "up"
function App() {
  const reducer = (state, action) => {
    switch (action) {
      case handleDown:
        return state - 1
      case handleUp:
        return state + 1
      default:
        throw new Error("Invalid action")
    }
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    < div className="App" >
      {count}
      <div>< button onClick={() => dispatch(handleDown)}> Down</ button>
        <button onClick={() => dispatch(handleUp)}>Up</button>
      </div>
    </div >
  );
}

export default App;
