import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Popup from 'react-native-popup';
import data from '../mock/errorMessagesArray.json';



class ContainerTwo extends Component {


  renderPopup() {
    const { errorCode, errorMessage } = this.props;

    var message=errorCode.message;
    this.popup.alert(message);
  }

  render() {
  const { errorCode, setErrorCode, errorMessage } = this.props;

    return(
      <View style={styles.container}>
        <Button title='Set Error Code' onPress={() => setErrorCode()} />
        <Text>{errorCode.code}</Text>
        <Text>{errorCode.message}</Text>
        <Button title='Pay Now' onPress={this.renderPopup.bind(this)} />
        <Popup ref={popup => this.popup = popup} />
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

const mapStateToProps = state => {
  return {
    errorCode: state.errorCode,
    errorMessage: state.errorMessage
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    setErrorCode: function(){dispatch(actions.setErrorCode());},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerTwo);
