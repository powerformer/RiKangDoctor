import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

//import async action constants
import { 
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_ANSWERS,
  GET_SINGLE_DOCTOR_COMMENTS,

  ADD_SINGLE_DOCTOR_FAV,
} from '../../../constants/';

//import styles 
import { DoctorListStyle as styles } from '../../styles/';
//import header
import Header from '../../common/Header';


class DoctorDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_DOCTOR, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_ANSWERS, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id }});
  }

  render() {
    const { navigation, comments, answers, doctor, dispatch } = this.props;
    const { token, id } = navigation.state.params;


    return (
      <View>
        <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetailInfo', { id, token }) } }>
          <Text>查看详细资料</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { dispatch({ type: ADD_SINGLE_DOCTOR_FAV, payload: { token, id, doctor }})}}>
          <Text>添加收藏</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

DoctorDetail.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        navigation={navigation}
      />
    </View>
  ),
})

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);