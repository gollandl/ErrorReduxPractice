import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import ContainerOne from './components/ContainerOne';

const App = () => {
    return(
      <Provider store={createStore(reducers)} >
        <View style={styles.container}>
          <ContainerOne />
        </View>
      </Provider>
    );
}

export default App;

const styles = {
  container: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
  },
}
