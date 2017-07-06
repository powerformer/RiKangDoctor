import { SubmissionError, stopSubmit } from 'redux-form';
import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const submit = function submit(values, kind, dispatch) {
    const username = values.get('username');
    const password = values.get('password');

    //input fied submit validate
    if (!username || !password) {
      throw new SubmissionError({
        _error: '账号密码不能为空',
      });
    }

    if (!!username && username.length !== 11) {
      throw new SubmissionError({
        _error: '账号或密码错误，请重新输入',
        })
      }

      if (!!password && password.length <= 6) {
        throw new SubmissionError({
          _error: '密码至少大于6位'
        })
      } 

      if (!!password && password.length >= 20) {
        throw new SubmissionError({
          _error: '密码至少不能大于20位'
        })
      } 

      //connect data for submit
      const payload = {
        username: username,
        password: password,
      };

      //dispatch Login or Register async actions
      // when kind === login, and then dispatch Login actions...
      dispatch({ type: kind, payload });

      //cancel submiss level errors, later I will delete this.
      dispatch(stopSubmit(kind, {}));
}

export default submit;