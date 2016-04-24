/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
  TouchableHighlight
} from 'react-native';

//const lastChild = require('./child2.ios');

class lastChild extends Component {
  popAll(){
    this.props.navigator.popToTop();
  }

  popOnce(){
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>最后一页</Text>
        <TouchableHighlight
          onPress={() => this.popAll()}
          style={styles.button}
          underlayColor='#bbbbbb'>
          <Text style={styles.btnText}>回到主页</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={() => this.popOnce()}
          style={styles.button}
          underlayColor='#bbbbbb'>
          <Text style={styles.btnText}>回到上一页</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffd007',
    padding: 10
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: '#fff'
  },
  button: {
    flex: 2,
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    color: '#fff',
    margin: 2
  },
  btnText: {
    fontSize: 18,
    marginTop: 6,
    color: '#fff'
  }
});

module.exports = lastChild;
