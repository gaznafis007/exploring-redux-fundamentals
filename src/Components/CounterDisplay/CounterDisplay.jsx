import { useContext } from "react"
import { CounterContext } from "../../App"


const CounterDisplay = () => {
    // const {counter} = useContext(CounterContext)
    const {state} = useContext(CounterContext)
  return (
    <div className="shadow-md w-96 p-8 m-4 rounded-md border-purple-500 border-2 mx-auto">
        {/* <h2 className="text-3xl font-semibold text-center">Counter: {counter}</h2> */}
        <h2 className="text-3xl font-semibold text-center">Counter: {state}</h2>
    </div>
  )
}

export default CounterDisplay