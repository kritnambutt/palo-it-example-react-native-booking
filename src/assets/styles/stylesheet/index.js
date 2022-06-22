import {Dimensions, StyleSheet} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 20,
  },
  box_form: {
    backgroundColor: '#FFFFFF',
    zIndex: 40,
    width: width,
    height: height / 2,
    borderRadius: 30,
    position: 'absolute',
    left: 0,
    top: height / 2,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  default_font: {},
});

export default styles;
