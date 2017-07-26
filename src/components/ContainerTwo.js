import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Popup from 'react-native-popup';

class ContainerTwo extends Component {

  renderPopup() {
    const { errorCode, errorMessage } = this.props;

    //var message;
    var code=errorCode;

    //this.popup.alert(code);

    if ( code === 1 ) {
      this.popup.alert(errorMessage.error401.Code,errorMessage.error401.Message)
    } else if ( code === 2 ) {
      this.popup.alert(errorMessage.error402.Code,errorMessage.error402.Message)
    } else {
      this.popup.alert(errorMessage.error403.Code,errorMessage.error403.Message)
    }

    /*const message {
      switch(code) {
      case 1:
        return(
          errorMessage.error401.Message
        );
      case 2:
        return(
          errorMessage.error402.Message
        );
      case 3:
        return(
          errorMessage.error403.Message
        );
      default:
        return(
          errorMessage.erro200.Message
        );
    };*/

    /*if ( code === 1 ) {
      this.popup.alert(code);
    };*/

  }

  render() {
  const { errorCode, setErrorCode, errorMessage } = this.props;


    return(
      <View style={styles.container}>
        <Button title='Set Error Code' onPress={() => setErrorCode()} />
        <Text>{errorCode}</Text>
        <Button title='Pay Now' onPress={this.renderPopup.bind(this)} />
        <Popup ref={popup => this.popup = popup} />
      </View>
    );
  }
}
//<Text>{errorCode}</Text>
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
