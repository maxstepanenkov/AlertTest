import { useDispatch, useSelector } from "react-redux";
import { Alert } from 'reactstrap';

function AlertComponent({ alertType, closable, text, id, global }) {
  const store = useSelector(store => store);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({
      type: global ? 'REMOVE_FROM_SHOWN_GLOBAL_ALERT' : 'REMOVE_FROM_SHOWN_ALERT', 
      payload: { id }
    })
  }

  return (
    <Alert 
      color={alertType}
      toggle={closable || global ? handleClose : null}
      style={{ position: global && 'fixed' }}
    >{text}</Alert>
  )
}

export default AlertComponent;