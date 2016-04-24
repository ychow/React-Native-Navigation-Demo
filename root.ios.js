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

const ChildNav = require('./child.ios');

class RootNav extends Component {
  goDeeper(){
    this.props.navigator.push({
      title: '内页',
      component: ChildNav,
      passProps: {myElement: '传递的参数'}
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => this.goDeeper()}
          style={styles.button}
          underlayColor='#bbbbbb'>
          <Text style={styles.btnText}>进入内页</Text>
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
    backgroundColor: '#5151f4',
    padding: 10
  },
  button: {
    height: 36,
    flex: 1,
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

module.exports = RootNav;
