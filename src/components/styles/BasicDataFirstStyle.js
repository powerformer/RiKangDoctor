import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

//import common style
import { commonStyle } from './commonStyle';

//import screen adapt util
import px2dp from '../../utils/px2dp';

//get screen width and height
const { width, height } = Dimensions.get('window');

//single input style
export const BasicDataFirstStyle = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
  },

  imgBox: {
    width: width - px2dp(31) * 2,
    height: px2dp(41),
    marginTop: px2dp(43),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    ...Platform.select({
      ios: {
        marginTop: -10,
      },
      android: {
        marginTop: -5,
      }
    }),
    marginRight: -5
  },

  titleText: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: 24,
    color: '#000',
    marginTop: px2dp(75),
    marginBottom: px2dp(19),
  },
  subTitleText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#000',
  },

  inputBox: {
    width: width,
    alignItems: 'center',
    marginBottom: px2dp(-7),
    marginTop: px2dp(33),
  },
  itemBox: {
    width: px2dp(272),
    flexDirection: 'row',
    marginBottom: px2dp(43),
  },
  essential: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#000',
  },
  notice: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(14),
    color: '#D0021B',
    marginBottom: px2dp(25),
  },
  linearGradient: {
    width: px2dp(8),
    height: px2dp(64),
    borderRadius: 7.5,
    marginRight: px2dp(26),
    shadowOffset: { x: 0, y: 2 },
    shadowColor: '#50E3C2',
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  rightBox: {
    height: px2dp(64),
    justifyContent: 'space-between',
    width: px2dp(183)
  },
  topBox: {
    flexDirection: 'row',
    height: px2dp(24),
    alignItems: 'center',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 18,
    color: '#000',
    marginLeft: px2dp(10),
  },

  selectBox: {
    flexDirection: 'row',
    width: px2dp(129),
    height:px2dp(25),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectExtra: {
    justifyContent: 'center',
  },

  department: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    color: '#C8C8C8',
  },
  textInput: {
    width: px2dp(238),

    color: '#000',
    ...Platform.select({
      ios: {
        height: px2dp(30),
      },
      android: {
        height: px2dp(60),
      }
    })
  },

  nextBox: {
    width: width - 2 * px2dp(67),
    alignItems: 'flex-end',
  },
  extraNext: {
    marginTop: px2dp(25),
  },
  detailInput: {
    height: px2dp(112),
    paddingBottom: 2,
    textAlignVertical: 'center',
    fontSize: 18,
    width: px2dp(303),
    marginTop: px2dp(40),
  },

  selectImgBox: {
    marginTop: px2dp(40),
    width: width - px2dp(30) * 2,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectView: {
    backgroundColor: '#F5F6F7',
    height: px2dp(86),
    width: px2dp(86),
  },
  img: {
    height: px2dp(86),
    width: px2dp(86),
    marginRight: px2dp(15),
    marginBottom: px2dp(10),
  },

  tintBox: {
    height: px2dp(30),
    width: px2dp(180),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: px2dp(55),
  },
  tintText: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 16,
    color: '#000',
  },
  jumpText: {

    fontFamily: 'PingFangSC-Medium',
    fontSize: 16,
    color: '#27AB6F',
  },

  cd: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 12,
    color: '#FFF',
  },

  verifyBox: {
    width: px2dp(81),
    height: px2dp(31),
    backgroundColor: '#FF5151',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowOffset: { x:2, y: 2 },
    shadowRadius: 10,
    shadowColor: '#FC4259',
    shadowOpacity: 0.5,
  },
  verifyContainer: {
    width: px2dp(81),
    height: px2dp(31),
    borderRadius: 10,
  },

  avatarBox: {
    width: px2dp(201),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upLoadAvatar: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(18),
    color: '#C8C8C8',
  },

  consultInputBox: {
    height: px2dp(67),
    width: px2dp(220),
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: px2dp(1),
    borderBottomColor: '#DADADA',
    marginTop: px2dp(104),
    marginBottom: px2dp(77),
  },
  inputInnerBox: {
    width: px2dp(150),
    height: px2dp(50),
  },
  consultInput: {
    fontFamily: 'PingFangSC-Medium',
    fontSize: px2dp(48),
    color: '#09C79C',
    width: px2dp(150),
    height: px2dp(50),
    textAlign: 'center',
  },
  vacuateBox: {
    width: px2dp(308),
    marginBottom: px2dp(73),
  },
  vacuate: {
    fontFamily: 'PingFangSC-Light',
    fontSize: px2dp(18),
    color: '#000000',
  },

  fourthInputBox: {
    marginTop: px2dp(8),
  },

  fourthBox: {
    marginTop: px2dp(21),
    alignItems: 'center',
  },
  fourthTitle: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: px2dp(18),
    color: '#000000',
  },
  extraFourthNext: {
    width: width - 2 * px2dp(40),
    alignItems: 'flex-end',
    marginTop: px2dp(30),
  }
});