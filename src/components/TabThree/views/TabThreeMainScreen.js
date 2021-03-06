import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform, Image } from 'react-native';
import { connect } from 'react-redux';


import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from '../../TabOne/views/CustomTabBar';
import UltimateListView from '../../common/UltimateListView';

//import fav doc
import NearByDoctorSection from '../../TabOne/views/NearByDoctorSection';
//import post section 
import PostSection from '../../TabOne/views/PostSection';
//import problem item
import ProblemItem from './ProblemItem';
//import Service item
import PaidServiceItem from './PaidServiceItem';
//IMPORT underway service item
import ServiceItem from './ServiceItem'

//import px to dp 
import px2dp from '../../../utils/px2dp';

//import action constants
import { 
  GET_DOCTOR_PROFILE,
  GET_DOCTOR_INFO,
 } from '../../../constants/'

//import selector from select data
import { getDoctorProfileSelector } from '../../../selectors/';

import TabThreeHeaderSection from './TabThreeHeaderSection';

//use fake data

//import handle data func
import {
  handleUserData,
  ITEMS,
  jumpToScreenLists,
} from '../data/'

import {
  handleNearby,
  handleHealthPost,
} from '../../TabOne/data/TabOneMainScreen_data.js'

//import styles
import { UserScreenStyle as styles } from '../styles/';



class UserScreen extends PureComponent {

  componentDidMount() {

    const { dispatch, navigation, token } = this.props;

    dispatch({ type: GET_DOCTOR_PROFILE, payload: { token } });
    dispatch({ type: GET_DOCTOR_INFO, payload: { token } });
  } 

  render() {
    const { dispatch, navigation, token,  doctorProfile, doctorInfo  } = this.props;
    console.log('doctorProfile', doctorProfile && doctorProfile.toJS());

    // content: ,
    // content: ,
    // content: ,
    // content: doctorProfile.get('order_num'),
    
    let DATA = [];
    if (doctorProfile) {
      console.log(doctorProfile)
      DATA = [
        {
          title: '接受咨询次数',
          content: doctorProfile.get('order_num'),
        },
        {
          title: '回答问题次数',
          content: doctorProfile.get('patient_num'),
        },
        {
          title: '用户评分',
          content: doctorProfile.get('ratings')
        },
        {
          title: '查看收入情况',
        },
      ]
    }
    
    return (
      <View style={styles.container}>
        {
          <TabThreeHeaderSection 
            doctorProfile={doctorProfile} 
            navigation={navigation}
            token={token}
            doctorInfo={doctorInfo}
            dispatch={dispatch}
          />
        }
          <View style={styles.midBox}>
            {
              DATA.map((item, key) => {
                if (item.title === '查看收入情况') {
                  return (
                    <TouchableOpacity key={key} onPress={() => { navigation.navigate('Income', { token }) }}>
                      <View style={[ styles.titleBox ]}>
                        <View style={styles.extraTitleBox}>
                          <Text style={[ styles.title, styles.extraTitle ]}>{item.title}</Text>
                          <Image source={require('../img/rightArrow.png')} style={styles.img} />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                } else {
                  return (
                    <View style={styles.titleBox} key={key}>
                      <Text style={styles.content}>{item.content}</Text>
                      <Text style={[ styles.title ]}>{item.title}</Text>
                    </View>
                  )
                }
              })
            }
          </View>
      </View>
    )
  }
}

export default connect(
  state => getDoctorProfileSelector(state),
)(UserScreen);
