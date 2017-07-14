import React, { Component } from 'react';
import { View, Text, TextInput, Button, Input } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ContainerOne extends Component {
  constructor(props) {
  super(props);
  this.state = { text: 'Enter some text...' };
}
  render() {
    const { upperCase, lowerCase, wordfun } = this.props;

    return(
      <View>
        <TextInput value={this.state.text} onChangeText={(text) => this.setState({text})} />
        <Button title='Make Upper Case' onPress={() => upperCase(this.state.text)} />
        <Button title='Make Lower Case' onPress={() => lowerCase(this.state.text)} />
        <Text>{wordfun}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { wordfun: state.wordfun };
};

export default connect(mapStateToProps, actions)(ContainerOne);
