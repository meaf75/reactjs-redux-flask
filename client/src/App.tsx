import { AppRouter } from "./screens/AppRouter";
import { Provider } from "react-redux";
import { configureStore } from "./store";
const App = () => {

  const store = configureStore();
  
  return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
  );
}

export default App;
