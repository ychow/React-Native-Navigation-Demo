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

import lastChild from './child2.ios';

class ChildNav extends Component {
  goDeeper(){
    this.props.navigator.push({
      title: '最后一页',
      component: lastChild
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.myElement}</Text>
        <TouchableHighlight
          onPress={() => this.goDeeper()}
          style={styles.button}
          underlayColor='#bbbbbb'>
          <Text style={styles.btnText}>第二个内页</Text>
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
    backgroundColor: '#1aaf2d',
    padding: 10
  },
  text: {
    flex: 2,
    fontSize: 20,
    color: '#fff'
  },
  button: {
    flex: 1,
    height: 36,
    flexDirection: 'row',
    backgroundColor: '#123456',
    justifyContent: 'center',
    color: '#fff'
  },
  btnText: {
    fontSize: 18,
    marginTop: 6,
    color: '#fff'
  }
});

module.exports = ChildNav;
