import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './reduxx/counterSlice'
import Todu from './Todu'
function App() {
  const count = useSelector((state) => state.count.value)
  const dispatch=useDispatch()
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <Todu></Todu>
      </div>

    </>
  )
}

export default App
