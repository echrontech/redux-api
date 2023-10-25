import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice'
function Counter() {
  const count = useSelector((state)=>state.counter.count)
  const despatch = useDispatch()
  return (
    <>
      <button className='button' onClick={()=>{despatch(increment())}}> + </button>
      <span className='value'>Count: {count}</span>
      <button className='button' onClick={()=>{despatch(decrement())}}> - </button>
      <button className='button' onClick={()=>{despatch(incrementByAmount(10))}}> Increment by 10 </button>
    </>
  );
}

export default Counter