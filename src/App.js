import { useSelector } from "react-redux";
import ComponentFirst from "./componentFirst";
import ComponentSecond from "./componentSecond";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertComponent from "./components/Alert";

function App() {
  const store = useSelector(store => store.alert);

  return (
    <>
      <ComponentFirst />
    </>
  );
}

export default App;
