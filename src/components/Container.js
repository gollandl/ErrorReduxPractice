import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Popup from 'react-native-popup';

class Container extends Component {
  renderPopup() {
    const { errorCode } = this.props;
    var message=errorCode.message;
    var code=errorCode.serverCode;

    this.popup.alert(code,message);
  }

  handleOnPress() {
    const { setErrorCode } = this.props;

    setErrorCode();
    this.renderPopup();
  }

  render() {
    return(
      <View style={styles.container}>
        <Button title='Pay Now' onPress={this.handleOnPress.bind(this)} />
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
   };
};

const mapDispatchToProps = function(dispatch) {
  return {
    setErrorCode: function(){dispatch(actions.setErrorCode());},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
