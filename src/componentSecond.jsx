import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "./components/Alert";
import { getRandomId } from './helper';

function ComponentSecond() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const handleCreateAlert = () => {
    const id = getRandomId();
    dispatch({
      type: 'CLICK',
      payload: {
        alertType: 'error',
        id,
        delay: 5
      }
    })
  }

  return (  
    <>
      <button onClick={handleCreateAlert}>Click</button>
    </>
  )
}

export default ComponentSecond;