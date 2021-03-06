import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Container from './components/Container';


const App = () => {
    return(
      <Provider store={createStore(reducers)} >
        <Container />
      </Provider>
    );
}

export default App;
