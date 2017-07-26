import React, { Component } from 'react';
import { View, Text, TextInput, Button, Input } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PopUp extends Component {
  render() {
    const { openPopUp, message } = this.props;

    return(
      <View style={styles.container}>
        <Button title='Pop Up' onPress={() => openPopUp()} />
        <Text>{message}</Text>
      </View>

    );
  }
}

const styles = {
  container: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:100,
  },
}

const mapStateToProps = state => ({
  message: message(state),
});

const mapDispatchToProps = function(dispatch) {
  return {
    openPopUp: function(message){dispatch(actions.openPopUp(message));},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PopUp);
