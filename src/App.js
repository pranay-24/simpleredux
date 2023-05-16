import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ProductComponent from './ProductComponent';
function App() {
  
  return (
    <Provider store={store}>
    <div>
      <ProductComponent></ProductComponent>
    </div>
    </Provider>
  );
}

export default App;
