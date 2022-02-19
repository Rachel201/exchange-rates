import './App.css';
import store from './store/store';
import { Provider } from 'react-redux'
import {HomePage} from './components/HomePage'
import styled from 'styled-components';


const Title = styled.div`
    font-weight: bold;
    font-size: 2rem;
    color: #e01010;
    top:100px;
    padding-top:200px;
    `;

const App = () => {
  
  return (
    <div className="App">
      <Provider store={store}>
         <Title>Exchange Rates</Title>
        <HomePage/>
      </Provider>
    </div>
  );
}

export default App;
