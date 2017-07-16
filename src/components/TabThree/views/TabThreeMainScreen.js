import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';


import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from '../../TabOne/views/CustomTabBar';

//import action constants
import { 
  GET_PATIENT_PROFILE,
  
 } from '../../../constants/'

//import selector from select data
import { getPatientSelector } from '../../../selectors/';

import TabThreeHeaderSection from './TabThreeHeaderSection';

//use fake data



class UserScreen extends PureComponent {

  componentDidMount() {
    const { dispatch, navigation, token } = this.props;
    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
  } 

  render() {
    const { dispatch, patientProfile } = this.props;
    
    
    return (
      <View>
        <TabThreeHeaderSection patientProfile={patientProfile} />
        <ScrollableTabView
          page={0}
          style={{ marginTop: 148 }}
          renderTabBar={
            () => <CustomTabBar 
                      multiCustom={true} 
                      underlineStyle={{
                        marginLeft: 28,
                      }}
                      tabTextStyle={{
                        fontSize: 18,

                      }}
                  />
          }
        >
          {
            ITEMS.map((item, key) => (
              <View tabLabel={item} key={key}>
                <Text>{item}</Text>
              </View>
            ))
          }
        </ScrollableTabView>
      </View>
    )
  }
}

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
