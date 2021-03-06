
// import what we need
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { reduxForm, reset } from 'redux-form/immutable';
import { connect } from 'react-redux';

//commomn 表单组件
import { FormInput } from './common/';

//import async action consts
import { LOGIN } from '../constants/';

//Form container style
import { ContainerStyle as styles} from './styles/';

//通过selector最小限度获取最需要的数据
import { getInputInitial } from '../selectors/';

//对组件进行二次封装，以应对不同的处理场景如：注册，登录等共用一套逻辑
class LoginScreen extends PureComponent {

  componentWillUnmount() {
    this.props.dispatch(reset('Register'));
  }

  render() {
    //offer icon and icon title
    const inputData = {
      icon: require('./common/img/verify_passwd.png'),
      title: '账户密码'
    };
    return (
      <View style={styles.container}>
        <FormInput {...this.props} kind={LOGIN} inputData={inputData}/>
      </View>
    )
  }
}


let LoginForm =  reduxForm({
  form: 'Login',
})(LoginScreen);


//connect redux-store and react-native, get the data from the store.
const mapStateToProps = (state) => ({
    toast: getInputInitial(state),
    authCodeStatus: state.getIn(['auth', 'authCode', 'status']),
});

export default connect(mapStateToProps)(LoginForm);