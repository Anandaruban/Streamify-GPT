import Body from "./components/Body"
import { Provider } from "react-redux";
import storeUser from "./redux/storeUser";

const App = () => {
  return (
    <Provider store={storeUser}>
      <Body />
    </Provider>
  )
}

export default App;