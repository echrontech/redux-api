import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "./themeSlice";
function Theme() {
  const [color, setColor] = useState("white")
  const dispatch = useDispatch()
  return (
    <>
      <br /><br />
      <input type="text" onChange={(e)=>{setColor(e.target.value)}} />
      <button onClick={()=>{dispatch(changeTextColor(color))}}>Change Text Color</button>
    </>
  );
}

export default Theme