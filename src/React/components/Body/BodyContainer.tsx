import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import LeftHeader from './LeftPanel/Header';
import RightHeader from './RightPanel/Header/Container';
import LeftBody from './LeftPanel/Body/Container';
import RightBody from './RightPanel/Body/Container';

type Props = {};
export default class Body extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <LeftHeader />
          <RightHeader />
        </View>
        <View style={styles.body}>
          <LeftBody />
          <RightBody />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#BDBDBD',
    paddingTop: '1%',
    paddingLeft: '3%',
    paddingRight: '3%',
    paddingBottom: '3%'
  },
  header: {
    flex: 0.3,
    flexDirection: 'row'
  },
  body: {
    flex: 5,
    flexDirection: 'row'
  }
});
