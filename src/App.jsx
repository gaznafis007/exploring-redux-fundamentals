
import { createContext, useReducer } from 'react';
import './App.css'
// import Counter from './Components/Counter/Counter'
// import CounterDisplay from './Components/CounterDisplay/CounterDisplay'
import RegisterForm from './Components/RegisterForm/RegisterForm';
import { userReducer } from './State/userInfoReducer';
import { initialInfo } from './State/initialValue';

// export const CounterContext = createContext()
export const UserContext = createContext()

function App() {
  // const [counter, setCounter] = useState(0);

  // const value = {
  //   counter,
  //   setCounter
  // }

  // const initialCount = 0;
  // const counterReducer = (state, action) =>{
  //   switch(action.type){
  //     case "increment":
  //       return state + 1;
  //     case "decrement":
  //       return state - 1;
  //     case "reset":
  //       return state =0;
  //     default:
  //       return state
  //   }    
  // }
  // const [state, dispatch] = useReducer(counterReducer,initialCount)
  // const value = {
  //   state,
  //   dispatch
  // }
  
  const [userInfo, dispatch] = useReducer(userReducer, initialInfo)

  const value = {
    userInfo,
    dispatch
  }
  return (
    <>
      <UserContext.Provider value={value}>
      {/* <CounterDisplay/>
      <Counter/> */}
      <RegisterForm/>
      </UserContext.Provider>
    </>
  )
}

export default App
