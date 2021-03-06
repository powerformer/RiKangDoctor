import React from 'react';
import { StyleSheet, Dimensions, } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const HeaderSectionStyle = StyleSheet.create({
  headerBox: {
    width: width,
    height: px2dp(124),
    alignItems: 'center',
    position: 'absolute',
  },
  consult: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 24,
    color: '#FFF',
    letterSpacing: px2dp(-0.48),
    backgroundColor: 'transparent',
    marginTop: px2dp(35),
  },
});