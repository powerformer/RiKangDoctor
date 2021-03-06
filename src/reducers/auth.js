import { REHYDRATE } from 'redux-persist-immutable/constants';
import Immutable from 'immutable';

//import action constants
import { 
  LOGIN_SUCCESS, 
  LOGIN_ERROR, 
  LOGOUT, 
  LOGIN, 
  CLEAR_TOKEN, 
  SET_TOKEN,
  REGISTER,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  CLEAR_STATE,

  REQUEST_SMS_CODE,
  REQUEST_SMS_CODE_SUCCESS,
  REQUEST_SMS_CODE_ERROR,

  REGISTER_SEND_MESSAGE,
  REGISTER_SEND_MESSAGE_SUCCESS,
  REGISTER_SEND_MESSAGE_ERROR,

  CHANGE_PASSWORD,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,

  CLEAR_PASSWORD_STATE,

  FEEDBACK,
  FEEDBACK_SUCCESS,
  FEEDBACK_ERROR,

  CLEAR_FEEDBACK_STATE,

  SUBMIT_VERIFY_DATA,
  SUBMIT_VERIFY_DATA_SUCCESS,
  SUBMIT_VERIFY_DATA_ERROR,

  CLEAR_VERIFY_DATA_STATE,

  GET_DOCTOR_PROFILE,
  GET_DOCTOR_PROFILE_SUCCESS,
  GET_DOCTOR_PROFILE_ERROR,

  GO_HOME,
} from '../constants/'
import { persistor } from '../store';

const initialAuthState = Immutable.Map({ 
  token: null,
  isLoggedIn: false,
  isLoadingData: false,
  loginError: false,
  loginSuccess: false,

  isRegister: false,
  registerError: false,
  registerSuccess: false,

  phone: null,
  isRequestSmsCode: false,
  requestSmsCodeSuccess: true,
  requestSmsCodeError: false,

  isVerifyCode: false,
  verifyCodeSuccess: false,
  verifyCodeError: false,

  isChangePasswd: false,
  changePasswdSuccess: false,
  changePasswdError: false,

  isFeedback: false,
  feedbackSuccess: false,
  feedbackError: false,

  authCode: Immutable.fromJS({
    status: 2,
  }),
  id: null,

  isSubmitVerifyCode: false,
  submitVerifyCodeSuccess: false,
  submitVerifyCodeError: false,

  doctorProfile: null,
  isGetDoctorProfile: false,
  getDoctorProfileSuccess: false,
  getDoctorProfileError: false,
});

const auth = function auth(state = initialAuthState, action) {
  switch (action.type) {

    // later write the register logic
    case REGISTER:
      
      return state.merge({
        isLoadingData: true,
        registerError: false,
        registerSuccess: false,
      });
    
    case GO_HOME:

      return state.merge({
          authCode: Immutable.Map({
          status: 2,
        }),
      })


    case REGISTER_ERROR:
    
      return state.merge({
        isLoadingData: false,
        registerError: true,
      })

    case REGISTER_SUCCESS:

      return state.merge({
        isLoadingData: false,
        registerSuccess: true,
        authCode: Immutable.Map({
          status: 1,
        }),
      });



    case LOGIN: 
      //capture login action and show loading spinner
      return state.merge({
        isLoadingData: true,
        loginError: false,
        loginSuccess: false,
      });

    case LOGIN_SUCCESS:

    //set the isLoggedIn
      return state.merge({
        isLoggedIn: true,
        isLoadingData: false,
        loginSuccess: true,
        token: action.token,
        id: action.id,
      });


    case LOGIN_ERROR:

      //if login error, change the state 
      return state.merge({
        isLoadingData: false,
        loginError: true,
      });

    case LOGOUT:
      //clear all the persist data in the storage
      persistor.purge();

      //change the show screen
      return state.merge({
        isLoggedIn: false,
        token: null,
        id: null,
        loginError: false,
        loginSuccess: false,
      });


    case REQUEST_SMS_CODE:

      return state.merge({
        isRequestSmsCode: true,
        requestSmsCodeError: false,
        requestSmsCodeSuccess: false,
      });


    case REQUEST_SMS_CODE_SUCCESS:

      const { phone } = action;

      return state.merge({
        isRequestSmsCode: false,
        requestSmsCodeSuccess: true,
        phone,
      });


    case REQUEST_SMS_CODE_ERROR:

      return state.merge({
        isRequestSmsCode: false,
        requestSmsCodeError: true,
      });

    case REGISTER_SEND_MESSAGE:

      return state.merge({
        isVerifyCode: true,
        verifyCodeSuccess: false,
        verifyCodeError: false,
      })

    case REGISTER_SEND_MESSAGE_SUCCESS:

      return state.merge({
        isVerifyCode: false,
        verifyCodeSuccess: true,
        phone: action.phone,
      });

    case REGISTER_SEND_MESSAGE_ERROR:

      return state.merge({
        isVerifyCode: false,
        verifyCodeError: true,
      });

    case CHANGE_PASSWORD:

      return state.merge({
        isChangePasswd: true,
        changePasswdSuccess: false,
        changePasswdError: false,
      });

    case CHANGE_PASSWORD_SUCCESS:

      return state.merge({
        isChangePasswd: false,
        changePasswdSuccess: true,

      });

    case CHANGE_PASSWORD_ERROR:

      return state.merge({
        isChangePasswd: true,
        changePasswdError: true,
      });

    case CLEAR_PASSWORD_STATE:

      return state.merge({
        isChangePasswd: false,
        changePasswdSuccess: false,
        changePasswdError: false,
      });

    case FEEDBACK:

      return state.merge({
        isFeedback: true,
        feedbackSuccess: false,
        feedbackError: false,
      });

    case FEEDBACK_SUCCESS:

      return state.merge({
        isFeedback: false,
        feedbackSuccess: true,

      });

    case FEEDBACK_ERROR:

      return state.merge({
        isFeedback: true,
        feedbackError: true,
      });

    case SUBMIT_VERIFY_DATA:

      return state.merge({
        isSubmitVerifyCode: true,
        submitVerifyCodeSuccess: false,
        submitVerifyCodeError: false,
      });

    case SUBMIT_VERIFY_DATA_SUCCESS:

      return state.merge({
        isSubmitVerifyCode: false,
        submitVerifyCodeSuccess: true,
      });

    case SUBMIT_VERIFY_DATA_ERROR:

      return state.merge({
        isSubmitVerifyCode: false,
        submitVerifyCodeError: true,
      });

    case CLEAR_VERIFY_DATA_STATE:

      return state.merge({
        isSubmitVerifyCode: false,
        submitVerifyCodeSuccess: false,
        submitVerifyCodeError: false,
      })

    case CLEAR_FEEDBACK_STATE:

      return state.merge({
        isFeedback: false,
        feedbackSuccess: false,
        feedbackError: false,
      });

    case CLEAR_STATE:

      return state.merge({
        loginError: false,
        registerError: false,
        loginSuccess: false,
        registerSuccess: false,
        isRequestSmsCode: false,
        requestSmsCodeError: false,
        requestSmsCodeSuccess: false,

        verifyCodeSuccess: false,
        verifyCodeError: false,
      });

    case GET_DOCTOR_PROFILE:

      return state.merge({
        isGetDoctorProfile: true,
        getDoctorProfileSuccess: false,
        getDoctorProfileError: false,
      });

    case GET_DOCTOR_PROFILE_SUCCESS:

    const { doctorProfile } = action;

      return state.merge({
        isGetDoctorProfile: false,
        getDoctorProfileSuccess: true,
        doctorProfile,
      })

    case GET_DOCTOR_PROFILE_ERROR:

      return state.merge({
        isGetDoctorProfile: false,
        getDoctorProfileError: true,
      })
      
    case CLEAR_TOKEN: 

      // 清除token
        return state.merge({
          token: null,
        });

    case REHYDRATE:
      //get persist data from redux-persist
      const { auth } = action.payload;
      const token = auth && auth.has('token') && auth.get('token');
      const id = auth && auth.has('id') && auth.get('id');
      
      const authCodeObj = {};
      if (!token) {
        authCodeObj = {
          authCode: {
            status: 2,
          }
        }
      } else {
        authCodeObj = {
          authCode: auth && auth.has('authCode') && auth.get('authCode'),
        }
      }

      //use isLoggedIn show the initialScreen
      const isLoggedIn = !!token ? true : false;

      return state.merge({
        loginError: null,
        registerError: false,
        isLoggedIn,
        token,
        id,
        ...authCodeObj,
        loginSuccess: false,
      });

    default:
      return state;
  }
}

export default auth;