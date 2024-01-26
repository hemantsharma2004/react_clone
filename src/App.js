import Body from "./component/Body";
import AppStore from "./utils/appstore";
import { Provider } from "react-redux";

function App() {
  return (
     <div>
      <Provider store={AppStore}>
       <Body />
       </Provider>
     </div>
  );
}

export default App;
