import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
// import { Actions } from 'react-native-router-flux';

class Home extends Component {
  render() {
    return (
      <View style={styles.homeContainerStyle}>
        <Text>This is Home</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeContainerStyle: {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default Home;
