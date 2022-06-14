import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AlertComponent from "./components/Alert";
import { getRandomId } from './helper'

function ComponentFirst() {
  const store = useSelector(store => store);
  const dispatch = useDispatch();
  const [_id, setId] = useState();

  const handleCreateAlert = () => {
    const id = getRandomId() || null;
    dispatch({
      type: 'SHOW_ALERT',
      payload: {
        alertType: 'success',
        id,
        delay: 5000,
        closable: false,
        text: "Bla-Bla-Bla"
      }
    });
    setId(id);
  };

  const handleCreateGlobalAlert = () => {
    const id = getRandomId() || null;
    dispatch({
      type: 'SHOW_GLOBAL_ALERT',
      payload: {
        id,
        alertType: 'success',
        text: 'Tru-Tru-Tru'
      }
    })
  }

  return (
    <>
      <button onClick={handleCreateAlert}>Click</button>
      <button onClick={handleCreateGlobalAlert}>Global</button>
      {store.alerts.find(i => i.id === _id) 
        && store.alerts.map(i => 
        (<AlertComponent 
          key={i.id} 
          alertType={i.alertType} 
          closable={i.closable} 
          delay={i.delay} 
          text={i.text}
          id={i.id}
        />))}
      {store.globalAlerts.map(i => 
        (
          <AlertComponent
            key={i.id}
            alertType={i.alertType}
            text={i.text}
            global={true}
            id={i.id}
          />
        ))}
    </>
  )
}

export default ComponentFirst;