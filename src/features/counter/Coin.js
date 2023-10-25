import { useSelector } from 'react-redux';
function Coin() {
  const count = useSelector((state)=>state.counter.count)
  const themColor = useSelector((state)=>state.theme.color)
  return (
    <>
      <span style={{color: themColor}}>Coin: {count}</span>
    </>
  );
}

export default Coin