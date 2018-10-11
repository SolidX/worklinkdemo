import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import LeftContainer from '../../../common/LeftHeader/LeftContainer';
import LeftTitle from '../../../common/LeftHeader/LeftTitle';
import FilterSort from '../../../common/LeftHeader/FilterSort';

export default class EmployeeWorkOrderHeader extends Component {
  render() {
    return (
      <LeftContainer>
        <LeftTitle>
          <Text style={styles.titleText}>{this.props.children}</Text>
        </LeftTitle>
        <FilterSort />
      </LeftContainer>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#424242'
  }
});
