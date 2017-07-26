import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PopUp from './components/popup';
import reducers from './reducers';
import ContainerTwo from './components/ContainerTwo';


const App = () => {
    return(
      <Provider store={createStore(reducers)} >
        <ContainerTwo />
      </Provider>
    );
}

export default App;
