import React, { Component } from 'react';
import { View, Text, TextInput, Button, Input } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ContainerOne extends Component {
  static navigationOptions = {
    title: 'Words'
  }

  constructor(props) {
  super(props);
  this.state = { text: 'Enter some text...' };
}
  render() {
    const { upperCase, lowerCase, wordfun } = this.props;

    return(
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.text} onChangeText={(text) => this.setState({text})} />
        <Button title='Make Upper Case' onPress={() => upperCase(this.state.text)} />
        <Button title='Make Lower Case' onPress={() => lowerCase(this.state.text)} />
        <Text>{wordfun}</Text>
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
  input: {
    alignItems: 'center',
    height: 40,
    width: 200
  }
}

const mapStateToProps = state => {
  return { wordfun: state.wordfun };
};

const mapDispatchToProps = function(dispatch) {
  return {
    upperCase: function(inputWord){dispatch(actions.upperCase(inputWord));},
    lowerCase: function(inputWord){dispatch(actions.lowerCase(inputWord));},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerOne);
