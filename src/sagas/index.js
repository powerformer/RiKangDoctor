import { all } from 'redux-saga/effects';

//import userauth sagas
import { loginFlow, registerFlow, clearFlow } from './userSaga';

//import posts sagas
import { watchGetPost, watchGetPosts } from './postSaga';

export default function* rootSaga() {
  yield all([
    loginFlow(),
    registerFlow(),
    clearFlow(),

    watchGetPost(),
    watchGetPosts(),
  ]);
}